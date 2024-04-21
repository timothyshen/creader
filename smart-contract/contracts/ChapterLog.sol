// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IBookShare.sol";

contract ChapterLog {
    uint8 public constant MAX_REMIXES = 10;

    struct Tipping {
        address from;
        uint amount;
        uint tippingTimes;
    }

    struct Chapter {
        string title;
        string content;
        address author;
        uint8 remixes;
        bool isRemix;
    }

    Chapter[] public chapters;
    mapping(uint256 => Chapter) public chapterMap;
    mapping(uint256 => uint256[]) private remixesList;
    mapping(uint256 => Tipping[]) private chapterTips;

    IBookShare bookShare;

    event ChapterCreated(uint256 chapterId, address author);
    event ChapterRemixed(uint256 originalChapterId, uint256 newChapterId, address author);
    event ChapterRemixed(uint256 originalChapterId, uint256 newChapterId);
    event AuthorTipped(uint256 chapterId, address from, uint amount);

    constructor(address _bookShareAddress) {
        bookShare = IBookShare(_bookShareAddress);
    }

    function createChapter(string memory _title, string memory _content, uint256 assetId) external {
        require(bookShare.checkUserShareIsLagerThanOne(assetId), "Purchase a book share to create a chapter");
        chapters.push(Chapter(_title, _content, msg.sender, 0, false));
        uint256 chapterId = chapters.length - 1;
        emit ChapterCreated(chapterId, msg.sender);
    }

    function remixChapter(uint256 chapterId, string memory _title, string memory _content) external {
        require(chapterId < chapters.length, "Chapter does not exist");
        Chapter storage original = chapters[chapterId];
        require(original.remixes < MAX_REMIXES, "Max remixes reached");
        require(!original.isRemix, "Remixes of remixes not allowed");

        chapters.push(Chapter(_title, _content, msg.sender, 0, true));
        uint256 newChapterId = chapters.length - 1;
        original.remixes++;
        remixesList[chapterId].push(newChapterId);

        emit ChapterRemixed(chapterId, newChapterId);
    }

    function tipAuthor(uint256 chapterId) external payable {
        require(chapterId < chapters.length, "Chapter does not exist");
        require(msg.value > 0, "Send ether to tip the author");
        chapterTips[chapterId].push(Tipping(msg.sender, msg.value, block.timestamp));
        payable(chapters[chapterId].author).transfer(msg.value);

        emit AuthorTipped(chapterId, msg.sender, msg.value);
    }

    // Additional functions like getChapter, getChapterCount, etc., can be similarly optimized or adapted as needed.


    function getChapter(uint256 chapterId) public view returns (Chapter memory) {
        require(chapterId < chapters.length, "Chapter does not exist");
        return chapters[chapterId];
    }

    function getChapterCount() public view returns (uint256) {
        return chapters.length;
    }

    function getChapterLog() public view returns (Chapter[] memory) {
        return chapters;
    }

    function getRemixes(uint256 chapterId) public view returns (uint256[] memory) {
        require(chapterId < chapters.length, "Chapter does not exist");
        return remixesList[chapterId];
    }

    function getChapterTips(uint256 chapterId) public view returns (Tipping[] memory) {
        require(chapterId < chapters.length, "Chapter does not exist");
        return chapterTips[chapterId];
    }

}
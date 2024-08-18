import { LicenseTerms } from "./licenseTerms";


const data = [{
    "Others Can": {
        "Credit you appropriately": 1,
        "Remix this work": 1,
        "Enforce that derivatives have the same License Terms that you provide them": 1,
    },
    "Others Cannot": {
        "Commercialize the remix": 1,
    },
    "Additional Notes": {
        "This license never expires": 1,
    },
}, {
    "Others Can": {
        "Credit you appropriately": 1,
        "Remix this work": 1,
        "Enforce that derivatives have the same License Terms that you provide them": 1,
    },
    "Others Cannot": {
        "Commercialize the remix": 1,
    },
    "Additional Notes": {
        "This license never expires": 1,
    },
}, {
    "Others Can": {
        "Credit you appropriately": 1,
        "Remix this work": 1,
        "Enforce that derivatives have the same License Terms that you provide them": 1,
    },
    "Others Cannot": {
        "Commercialize the remix": 1,
    },
    "Additional Notes": {
        "This license never expires": 1,
    },
}]

interface TermsListProps {
    order: number;
}


export default function TermsList({ order }: TermsListProps) {
    const selectedData = [data[order]];

    return (
        <div>
            <h1>Terms List</h1>
            {selectedData.map((item, index) => (
                <div key={index} className="mb-6">
                    {Object.entries(item).map(([category, terms]) => (
                        <div key={category} className="flex flex-col space-y-2 mb-4">
                            <p className="font-bold">{category}</p>
                            {Object.entries(terms).map(([term, value]) => (
                                <p key={term}>{term}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
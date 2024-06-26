import WalletConnectComponent from "@/components/WalletConnect";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WalletConnectComponent id={params.id} />
    </main>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return (
    <>
      <h3 className="mb-4 pb-2 fw-normal">Weather in {city}</h3>
    </>
  );
}

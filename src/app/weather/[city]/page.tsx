import { WeatherContainer } from "@/components/weather-container";

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <WeatherContainer city={city} />;
}

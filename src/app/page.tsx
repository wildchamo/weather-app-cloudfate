import { Button } from "@/components/button";

export default function Home() {
  return (
    <section className="home-body">
      <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast now!</h3>
      <select className="form-select" id="location-select">
        <option value="london">London, UK</option>
        <option value="new-york">New York, US</option>
        <option value="los-angeles">Los Angeles, US</option>
        <option value="berlin">Berlin, Germany</option>
        <option value="tokyo">Tokyo, Japan</option>
      </select>
      <Button />
    </section>
  );
}

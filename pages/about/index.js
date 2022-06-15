import Link from "next/link";

function AboutPage() {
  const abouts = [
    { id: "a", name: "1" },
    { id: "b", name: "2" },
  ];
  return (
    <div>
      <h1>This is my About Pages</h1>
      <ul>
        {abouts.map((about) => (
          <li key={about.id}>
            {/* <Link href={`/about/${about.id}`}>{about.name}</Link> */}
            <Link href={{
              pathname: "/about/id",
              query: {id: about.id}
            }}>{about.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
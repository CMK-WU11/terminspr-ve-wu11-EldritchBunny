export default async function ActivitiesPage() {
  let data;

  try {
    const ActivitiesPage = await fetch("http://localhost:4000/api/v1/activities");
    data = await response.json();
  } catch (error) {}

  return (
    <>
      <ul>
        
        
      </ul>
    </>
  );
}

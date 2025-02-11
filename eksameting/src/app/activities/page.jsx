export default async function ActivitiesPage() {
  let data;

  try {
    let ActivitiesPage = await fetch("http://localhost:4000/api/v1/activities");
    data = await response.json();
  } catch (error) {
    console.error("site is running into an issue");
  }

  return (<>
        <ul><li>{data.map}</li></ul>
  
  
  
  </>);
}

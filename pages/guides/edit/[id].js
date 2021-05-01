import axios from "axios";

export async function getServerSideProps({ params: { id } }) {
  const guide = await axios.get(`http://localhost:1337/guides/${id}`);

  return { props: { guide: guide.data } };
}

export default function EditGuidePage({ guide }) {
  console.log(guide);
  return (
    <div>
      <h1>Edit Guide</h1>
    </div>
  );
}

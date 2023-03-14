import styles from "../styles/Home.module.css";
import axios from "axios";

function Page({ data }: any) {
  const handleOnClick = async () => {
    const res = await axios.get(`/api/getListData`);
  };

  return (
    <div className={styles.container}>
      test!!!!! : {data}
      <button onClick={() => handleOnClick()}>Click Button</button>
    </div>
  );
}

const TestStyle = styled.div``;

export async function getServerSideProps() {
  // const res = await axios.get(`/api/getListData`);
  // const data = await res.json();

  return { props: { data: "dsfkljaslkdfj" } };
}

export default Page;

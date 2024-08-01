import PageTitle from "../../components/pageTitle"
import Tech from "./tech"

const page = () => {
  return (
    <section>
        <PageTitle title="OPEN SOURCE EXPLORERS" bgColor="green-100" />
        <div className="bg-green-10 h-full py-4">
          <Tech />
        </div>
    </section>
  )
}

export default page
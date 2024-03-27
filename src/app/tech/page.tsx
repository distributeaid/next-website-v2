import PageTitle from "../components/pageTitle"
import Tech from "./tech"

const page = () => {
  return (
    <section>
        <PageTitle title="OPEN SOURCE EXPLORERS" />
        <div className="bg-light-brown h-full">
          <Tech />
        </div>
    </section>
  )
}

export default page
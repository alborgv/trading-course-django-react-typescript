import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer"
import OurCourse from "../components/Sections/OurCourse";
import Steps from "../components/Sections/Steps";
import InfoCourse from "../components/Sections/InfoCourse";
import JoinDiscord from "../components/Sections/JoinDiscord";
import FloatingWhatsAppButton from "../components/Wpp";

export default function Course() {
  return (
    <Layout>
      <OurCourse/>
      <Steps/>
      <InfoCourse/>
      <JoinDiscord/>
      <Footer />
      <FloatingWhatsAppButton phoneNumber="971553909401"
        message="¡Hi, I would like more information about the course!."
      />
    </Layout>
  )
}
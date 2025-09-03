import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer"
import LearnToTrade from "../components/Header/LearnToTrade";
import YourProgressOurMission from "../components/Sections/YourProgressOurMission";
import Benefits from "../components/Sections/Benefits"
import Contact from "../components/Sections/Contact"
import Services from "../components/Sections/Services";
import ReadyForLearn from "../components/Sections/ReadyForLearn";
import FloatingWhatsAppButton from "../components/Wpp";
export default function Home() {


  return (
    <Layout>
      <LearnToTrade/>
      <Services/>
      <YourProgressOurMission/>
      <Benefits/>
      <Contact/>
      <ReadyForLearn/>
      <Footer />
      <FloatingWhatsAppButton phoneNumber="971553909401"
        message="¡Hi, I would like more information about the course!."
      />
    </Layout>
  )
}
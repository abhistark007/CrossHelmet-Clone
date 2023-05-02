import "./App.css";
import FooterSection from "./components/FooterSection";
import LandingSection from "./components/LandingSection";
import NavBar from "./components/NavBar";
import NewArrivialsSection from "./components/NewArrivialsSection";
import OurContactsSection from "./components/OurContactsSection";
import OurEquipmentSection from "./components/OurEquipmentSection";
import OurGoalsSection from "./components/OurGoalsSection";
import StayInTouch from "./components/StayInTouch";

function App() {
  return (
    <div className="flex flex-col">
        <NavBar/>
        {/* Section 1 */}
        <LandingSection/>

        {/* Section 2 */}
        <OurGoalsSection/>

        {/* Section 3 */}
        <OurEquipmentSection/>

        {/* Section 4 */}
        <NewArrivialsSection/>

        {/* Section 5 */}
        <OurContactsSection/>

        {/* Section 6 */}
        <StayInTouch/>

        <FooterSection/>        
    </div>
  );
}

export default App;

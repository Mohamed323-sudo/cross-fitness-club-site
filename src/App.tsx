import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import BenefitsSection from "./Components/BenefitsSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import ServicesSection from "./Components/ServicesSection";
import FormatsSection from "./Components/FormatsSection";
import PaymentsSection from "./Components/PaymentsSection";
import Testimonials from "./Components/Testimonials";
import ContactsSection from "./Components/ContactsSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'main main'`,
        }}
      >
        <GridItem area="nav" bg="black">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Hero />
          <BenefitsSection />
          <ActivitiesSection />
          <ServicesSection />
          <FormatsSection />
          <PaymentsSection />
          <Testimonials />
          <ContactsSection />
          <Footer />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

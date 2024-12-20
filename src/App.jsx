import Accordion from "./assets/components/Accordions/Accordion";
import Calculator from "./assets/components/Calculator/Calculator";
import ColorSwitcher from "./assets/components/ColorSwitcher/ColorSwitcher";
import Counter from "./assets/components/Counter/Counter";
import HiddenSearchBar from "./assets/components/HiddenSearchBar/HiddenSearchBar";
import Meals from "./assets/components/MealTracker/Meals";
import Testimonials from "./assets/components/Testimonials/Testimonials";
import Todo from "./assets/components/Todo/Todo";
import { accordionData } from "../src/assets/components/Accordions/content";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ColorSwitcher /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;

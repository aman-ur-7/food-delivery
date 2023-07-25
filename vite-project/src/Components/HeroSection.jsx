import React from "react";
import {
  Card,
  Stack,
  CardHeader,
  Divider,
  ButtonGroup,
  Button,
  CardBody,
  Heading,
  CardFooter,
  Text,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="food-slider">
        <div>
          <img
            src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div></div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div></div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/161573/background-water-breakfast-bright-161573.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div>
            <h1>A simple & delicious traditional cooking</h1>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              quis elementum. Phasellus sed efficitur dolor, et ultricies sapien
              . Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Labore, explicabo.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="card-items">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_1280.jpg"
            alt=""
          />
          <div className="food-card">
            <div>
              <h3>salad we have</h3>
              <p>
                For you sir . Lorem ipsum, dolor sit amet consectetur
                adipisicing.
              </p>
            </div>
            <div>
              <select>
                <option value="0">Select</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
              </select>
              <select>
                <option value="0">Select</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

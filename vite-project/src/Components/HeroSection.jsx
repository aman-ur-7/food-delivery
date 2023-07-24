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
        <Card maxW="sm">
          <CardBody>
            <img
              src="https://images.pexels.com/photos/161573/background-water-breakfast-bright-161573.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Green double couch with wooden legs"
              // borderradius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi laudantium aspernatur natus?
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;

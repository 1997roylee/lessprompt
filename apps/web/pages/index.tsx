import { Button, Container, Text } from "@chakra-ui/react";
import { Hero } from "@components/Hero";
import { MarketPlace } from "@components/MarketPlace";
import DefaultLayout from '../layouts/DefaultLayout';

export default function Page() {
  return (
    <>
      <Hero />
      <Container py={12}>
        <MarketPlace />
      </Container></>
  );
}

Page.layout = DefaultLayout
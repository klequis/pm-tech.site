import React from "react";
import { compose } from "recompose";
import injectSheet from "react-jss";
import Text from "ui/Text";
import iTVC01 from "media/meetup/tvc01.jpg";
import Section from "ui/Section";
import PictureElement from "ui/PictureElement";
import ParagraphWrapper from "ui/ParagraphWrapper";

const text = (
  <ParagraphWrapper>
    <Text variant="body1">We are just getting started.</Text>
    <Text variant="body1">Contact: carl@private-money-tech.com</Text>
  </ParagraphWrapper>
);

const TriValleyCoders = ({ classes, breakpoint }) => {
  return <Section>{text}</Section>;
};

const styles = theme => ({
  image: {
    marginTop: "2.5rem",
    [theme.breakpoints.up("xl")]: {
      marginTop: 70
    }
  }
});

export default compose(injectSheet(styles))(TriValleyCoders);

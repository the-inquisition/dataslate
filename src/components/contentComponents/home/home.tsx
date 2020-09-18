import React, { Fragment, useContext } from "react";
import { Button, Row, Col, Words } from "components/ui";
import { LoremIpsum } from "react-lorem-ipsum";
import { withSounds } from "arwes";

const HomeScreen = () => {
  const WordsWithSound = withSounds()((props) => (
    <div
      onAnimationIteration={() => {
        props.sounds.typing.play();
      }}
    >
      <Words {...props}>{props.children}</Words>
    </div>
  ));

  return (
    <Fragment>
      <Row>
        <Col l={12}>
          <WordsWithSound animate animation={{ timeout: 1500 }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            dictum nunc tortor aliquet faucibus. Interdum blandit felis
            vestibulum conubia congue. Etiam suscipit vestibulum non litora nam
            neque nibh nunc. Laoreet tempus erat est commodo netus tincidunt
            felis rutrum phasellus. Mus conubia cras commodo nam libero
            scelerisque finibus malesuada sollicitudin. Praesent platea
            suspendisse parturient blandit habitasse. Lacus eros donec rhoncus
            sed laoreet mus. Tristique luctus quisque duis efficitur class
            luctus? Urna justo augue purus cursus consectetur gravida
            condimentum rhoncus? Metus iaculis dignissim maecenas aliquet fusce
            condimentum augue. Ad vulputate hac nostra ultricies efficitur
            purus. Risus curae mattis; litora et gravida gravida. Malesuada dui
            vitae ligula rhoncus libero massa ornare erat. Ultricies senectus
            ultricies euismod per consectetur sapien. Vel dolor risus facilisi,
            vulputate gravida leo facilisi. Hac aliquam senectus cursus elit
            pellentesque lobortis. Quis pharetra elementum quisque dis ultrices
            arcu. Cubilia sit mollis elit conubia volutpat commodo consectetur
            semper tellus. Tortor nam donec maximus ad urna litora volutpat.
            Lacus porta hendrerit sed pulvinar ad ornare montes. Dapibus
            ridiculus arcu litora eleifend at, sollicitudin primis. Ad potenti
            interdum tincidunt, viverra fermentum morbi interdum curae. Mus nam
            augue imperdiet sapien pretium semper lacinia. At euismod montes
            nascetur turpis etiam. Est consequat fringilla dis sit netus; duis
            suspendisse ligula. Ornare mi luctus orci tempor libero ridiculus.
            Volutpat nunc ornare; parturient libero senectus nisi. Ornare
            hendrerit fames faucibus sagittis varius torquent, pretium diam.
            Nascetur malesuada lacinia elementum dolor sapien enim torquent
            pretium. Aliquet neque donec dignissim suspendisse volutpat ex
            rutrum. Ipsum facilisis mattis vehicula tempus efficitur platea
            fringilla. Hendrerit pretium ex dapibus; tincidunt dictum placerat.
            Dictum nec pharetra dapibus libero ad maximus enim lacinia
            habitasse. Maecenas malesuada at ultrices proin tellus inceptos at
            in. Pharetra facilisis aenean sed ullamcorper felis erat eros quis.
            Luctus netus placerat enim tristique maximus himenaeos condimentum!
            Leo bibendum libero etiam fermentum porta nam. Blandit sem mi rutrum
            sapien elit tortor efficitur. Cursus vitae nascetur conubia mauris
            netus finibus ridiculus. Vel conubia penatibus interdum felis lorem
            ut? Cras urna torquent quam lacus primis netus. Blandit mollis
            fermentum, habitant sed magnis facilisis proin semper. Felis vitae
            placerat odio rutrum nulla. Ad velit vulputate pharetra sem
            tincidunt sed. Avivamus rhoncus tellus cubilia quis per facilisis
            morbi.
          </WordsWithSound>
          {/* <Words animate animation={{ timeout: 1500 }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            dictum nunc tortor aliquet faucibus. Interdum blandit felis
            vestibulum conubia congue. Etiam suscipit vestibulum non litora nam
            neque nibh nunc. Laoreet tempus erat est commodo netus tincidunt
            felis rutrum phasellus. Mus conubia cras commodo nam libero
            scelerisque finibus malesuada sollicitudin. Praesent platea
            suspendisse parturient blandit habitasse. Lacus eros donec rhoncus
            sed laoreet mus. Tristique luctus quisque duis efficitur class
            luctus? Urna justo augue purus cursus consectetur gravida
            condimentum rhoncus? Metus iaculis dignissim maecenas aliquet fusce
            condimentum augue. Ad vulputate hac nostra ultricies efficitur
            purus. Risus curae mattis; litora et gravida gravida. Malesuada dui
            vitae ligula rhoncus libero massa ornare erat. Ultricies senectus
            ultricies euismod per consectetur sapien. Vel dolor risus facilisi,
            vulputate gravida leo facilisi. Hac aliquam senectus cursus elit
            pellentesque lobortis. Quis pharetra elementum quisque dis ultrices
            arcu. Cubilia sit mollis elit conubia volutpat commodo consectetur
            semper tellus. Tortor nam donec maximus ad urna litora volutpat.
            Lacus porta hendrerit sed pulvinar ad ornare montes. Dapibus
            ridiculus arcu litora eleifend at, sollicitudin primis. Ad potenti
            interdum tincidunt, viverra fermentum morbi interdum curae. Mus nam
            augue imperdiet sapien pretium semper lacinia. At euismod montes
            nascetur turpis etiam. Est consequat fringilla dis sit netus; duis
            suspendisse ligula. Ornare mi luctus orci tempor libero ridiculus.
            Volutpat nunc ornare; parturient libero senectus nisi. Ornare
            hendrerit fames faucibus sagittis varius torquent, pretium diam.
            Nascetur malesuada lacinia elementum dolor sapien enim torquent
            pretium. Aliquet neque donec dignissim suspendisse volutpat ex
            rutrum. Ipsum facilisis mattis vehicula tempus efficitur platea
            fringilla. Hendrerit pretium ex dapibus; tincidunt dictum placerat.
            Dictum nec pharetra dapibus libero ad maximus enim lacinia
            habitasse. Maecenas malesuada at ultrices proin tellus inceptos at
            in. Pharetra facilisis aenean sed ullamcorper felis erat eros quis.
            Luctus netus placerat enim tristique maximus himenaeos condimentum!
            Leo bibendum libero etiam fermentum porta nam. Blandit sem mi rutrum
            sapien elit tortor efficitur. Cursus vitae nascetur conubia mauris
            netus finibus ridiculus. Vel conubia penatibus interdum felis lorem
            ut? Cras urna torquent quam lacus primis netus. Blandit mollis
            fermentum, habitant sed magnis facilisis proin semper. Felis vitae
            placerat odio rutrum nulla. Ad velit vulputate pharetra sem
            tincidunt sed. Avivamus rhoncus tellus cubilia quis per facilisis
            morbi.
          </Words> */}
        </Col>
      </Row>
    </Fragment>
  );
};

export { HomeScreen };

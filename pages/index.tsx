import React from 'react';
import MainLayout from '../src/layouts/mainLayout';
import { Card, Col } from 'antd';
import CSS from 'csstype';
import AppToolbar from '../src/components/appToolbar';

const contentStyle: CSS.Properties = {
  marginTop: '10px',
  display: 'flex',
  flex: '1'
};


const Index = () => {

  return (
    <MainLayout>
      <AppToolbar />
      <Col xs={24} sm={{ span: 16, offset: 4 }} style={contentStyle}>
        <Card>
          {value}
        </Card>
      </Col>

    </MainLayout>
  );
};

export default Index;

const value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo. Eros in cursus turpis massa. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Fames ac turpis egestas maecenas pharetra. Cras ornare arcu dui vivamus arcu. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Viverra nibh cras pulvinar mattis nunc sed blandit. Viverra nam libero justo laoreet sit. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Iaculis nunc sed augue lacus viverra vitae congue.

Pharetra et ultrices neque ornare. Pharetra vel turpis nunc eget lorem. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Tristique nulla aliquet enim tortor at. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Vitae congue mauris rhoncus aenean vel elit. Lectus vestibulum mattis ullamcorper velit sed. Euismod nisi porta lorem mollis aliquam ut porttitor. Proin sagittis nisl rhoncus mattis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Vitae congue eu consequat ac felis. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Suspendisse interdum consectetur libero id faucibus. Nisl nunc mi ipsum faucibus vitae aliquet nec. Morbi quis commodo odio aenean sed adipiscing diam. Ultrices mi tempus imperdiet nulla. Vestibulum sed arcu non odio euismod lacinia at.

Neque ornare aenean euismod elementum nisi quis eleifend. Facilisis mauris sit amet massa vitae tortor condimentum. In hac habitasse platea dictumst quisque sagittis purus sit. Nulla facilisi nullam vehicula ipsum. Posuere lorem ipsum dolor sit. Rhoncus dolor purus non enim praesent. Nibh ipsum consequat nisl vel. Amet risus nullam eget felis eget nunc lobortis. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tristique senectus et netus et malesuada fames. Turpis egestas maecenas pharetra convallis posuere morbi. Nunc pulvinar sapien et ligula. Tortor id aliquet lectus proin nibh nisl. Adipiscing enim eu turpis egestas pretium aenean pharetra. Scelerisque in dictum non consectetur. Fringilla est ullamcorper eget nulla facilisi etiam dignissim.

Porttitor eget dolor morbi non arcu risus quis varius quam. Et ultrices neque ornare aenean euismod elementum. Amet porttitor eget dolor morbi non arcu. Eu augue ut lectus arcu bibendum at varius. Porta nibh venenatis cras sed felis eget velit. Quisque id diam vel quam elementum pulvinar etiam. Vulputate sapien nec sagittis aliquam malesuada. Vel facilisis volutpat est velit egestas dui id. Eu lobortis elementum nibh tellus. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Ante in nibh mauris cursus mattis. Nunc sed id semper risus in hendrerit gravida rutrum.

Placerat vestibulum lectus mauris ultrices eros. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tempor commodo ullamcorper a lacus vestibulum. Eu sem integer vitae justo eget magna fermentum iaculis eu. Consectetur adipiscing elit ut aliquam. Blandit cursus risus at ultrices mi tempus imperdiet. Tincidunt eget nullam non nisi est sit amet facilisis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. A diam sollicitudin tempor id eu nisl nunc mi. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Sed tempus urna et pharetra pharetra massa massa ultricies. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Ultrices eros in cursus turpis massa tincidunt dui. Consequat mauris nunc congue nisi vitae. Mattis enim ut tellus elementum sagittis vitae et leo duis. Orci a scelerisque purus semper eget duis. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Duis at consectetur lorem donec. Sed velit dignissim sodales ut eu sem integer vitae. Elementum facilisis leo vel fringilla est.` 
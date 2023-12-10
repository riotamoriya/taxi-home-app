import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { LocalStorageCRUD } from '../helpers/localStorage';

import * as styles from './setting.module.scss';


const SettingPage = () => {
  const [inputData, setInputData] = useState({ field1: '', field2: '', field3: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.field1 || !inputData.field2 || !inputData.field3) {
      setShowAlert(true);
    } else {
      setShowAlert(false);

      const storage = new LocalStorageCRUD();
      storage.setItem(JSON.stringify(inputData));
      alert('ok')
        // console.log('Form submitted:', JSON.parse(storage.getItem()));
    }
  };

  return (
    <Layout>
    <main >
    <Link to='/' className={styles.setting}/>

    <Container>
    <Row className="justify-content-md-center" style={{ margin: '3rem' }}>
      <Col md={6}>

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formField1">
        <Form.Label>住所</Form.Label>
        <Form.Control
          type="text"
          name="field1"
          value={inputData.field1}
          onChange={handleChange}
          placeholder="住所を入力"
        />
      </Form.Group>

      <Form.Group controlId="formField2">
        <Form.Label>緯度</Form.Label>
        <Form.Control
          type="text"
          name="field2"
          value={inputData.field2}
          onChange={handleChange}
          placeholder="住所緯度を入力"
        />
      </Form.Group>

      <Form.Group controlId="formField3">
        <Form.Label>経度</Form.Label>
        <Form.Control
          type="text"
          name="field3"
          value={inputData.field3}
          onChange={handleChange}
          placeholder="住所経度を入力"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        送信
      </Button>

      {showAlert && (
        <Alert variant="danger" style={{ marginTop: '10px' }}>
          すべての項目を入力してください。
        </Alert>
      )}
    </Form>
        </Col>
      </Row>
    </Container>
          </main>
          </Layout>
  );
}

export const Head = () => <Seo />

export default SettingPage
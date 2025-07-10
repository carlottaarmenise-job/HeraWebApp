import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Image, Modal } from "react-bootstrap";

function LocationProfile() {
  const [locationData, setLocationData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    photos: [],
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    const photos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setLocationData((prev) => ({
      ...prev,
      photos,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Profilo salvato!\n" +
        JSON.stringify(
          {
            ...locationData,
            photos: locationData.photos.map((p) => p.file.name),
          },
          null,
          2
        )
    );
  };

  return (
    <>
      <Card className="p-4">
        <h2 className="mb-4">Profilo Location</h2>
        <Form onSubmit={handleSubmit}>
          {/* ... altri campi form ... */}
          <Form.Group className="mb-3">
            <Form.Label>Nome Location</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={locationData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Indirizzo</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={locationData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={locationData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={locationData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={4}
              value={locationData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Carica fino a 6 foto</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </Form.Group>

          <Row className="mb-3">
            {locationData.photos.map(({ preview }, index) => (
              <Col xs={4} md={2} key={index} className="mb-2">
                <Image
                  src={preview}
                  thumbnail
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  alt={`Anteprima foto ${index + 1}`}
                />
              </Col>
            ))}
          </Row>

          <div className="d-flex gap-2">
            <Button variant="primary" type="submit">
              Salva Profilo
            </Button>
            <Button variant="secondary" onClick={() => setShowPreview(true)}>
              Anteprima Location
            </Button>
          </div>
        </Form>
      </Card>

      {/* Modal per anteprima */}
      <Modal
        show={showPreview}
        onHide={() => setShowPreview(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Anteprima Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Title>{locationData.name || "Nome Location"}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {locationData.address}
              </Card.Subtitle>
              <Card.Text>
                <strong>Telefono:</strong> {locationData.phone || "-"}
                <br />
                <strong>Email:</strong> {locationData.email || "-"}
              </Card.Text>
              <Card.Text>{locationData.description || "Descrizione..."}</Card.Text>

              <Row>
                {locationData.photos.length > 0 ? (
                  locationData.photos.map(({ preview }, index) => (
                    <Col xs={6} md={4} key={index} className="mb-3">
                      <Image
                        src={preview}
                        thumbnail
                        alt={`Foto location ${index + 1}`}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                      />
                    </Col>
                  ))
                ) : (
                  <p>Nessuna foto caricata</p>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationProfile;

import unittest

from app import app


class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.ctx = app.app_context()
        self.ctx.push()
        self.client = app.test_client()

    def tearDown(self):
        self.ctx.pop()

    def test_receiver(self):
        response = self.client.post("/receiver", json={"text": "hello world"})
        assert response.status_code == 200

    def test_home(self):
        response = self.client.get("/")
        assert response.status_code == 200

    def test_getAudio_file(self):
        response = self.client.get("/reference_recordings/pronunciation_umbrella.mpeg")
        assert response.status_code == 200

    def test_random_word(self):
        response = self.client.get("/random_word")
        assert response.status_code == 200


if __name__ == "__main__":
    unittest.main()

from django.test import TestCase


class PublicSiteTests(TestCase):
    def test_home_page_contains_server_rendered_navigation(self):
        response = self.client.get("/", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Главная")
        self.assertContains(response, "Команда")
        self.assertContains(response, "Контакты")

    def test_robots_txt_served_from_root(self):
        response = self.client.get("/robots.txt", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["Content-Type"], "text/plain; charset=utf-8")
        self.assertContains(response, "User-agent: *")

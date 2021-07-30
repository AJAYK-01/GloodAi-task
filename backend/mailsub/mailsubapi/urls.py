# from django.urls import include, path
from django.conf.urls import url
from . import views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^subscribers$', views.subscriber_list),
    url(r'^subscribers/$', views.subscriber_list),
    url(r'^addsub/$', views.add_subscriber),
]

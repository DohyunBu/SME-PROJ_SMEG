from django.urls import path
from users.views import RegisterView, LoginView, LogoutView, ShowUserInfoView, Pdf2dfView, UpdatelevelView, UpdateretryView, UpdatetypeView, ShowgraduateView, ShowabeekView, RecomgyoyangView, RecommajorView, RecomabeekView, AddTimeTableView, AlterTimeTableView, AddMemoView, DeleteMemoView, DeleteTimeTableView, ShowTimeTableView, ShowMemoView, SearchLectureView, ShowchangegraduateView, ShowchangeabeekView, AlterEvalView, ShowEvalView
app_name = 'users'

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('pdf2df/',Pdf2dfView.as_view(), name='pdf2df'),
    path('updatelevel/',UpdatelevelView.as_view(), name='updatelevel'),
    path('updateretry/',UpdateretryView.as_view(), name='updateretry'),
    path('updatetype/',UpdatetypeView.as_view(), name='updatetype'),
    path('showgraduate/',ShowgraduateView.as_view(), name='showgraduate'),
    path('showabeek/',ShowabeekView.as_view(), name='showabeek'),
    path('recomgyoyang/',RecomgyoyangView.as_view(), name='recomgyoyang'),
    path('recommajor/',RecommajorView.as_view(), name='recommajor'),
    path('recomabeek/',RecomabeekView.as_view(), name='recomabeek'),
    path('addtimetable/',AddTimeTableView.as_view(), name='addtimetable'),
    path('altertimetable/',AlterTimeTableView.as_view(), name='altertimetable'),
    path('addmemo/',AddMemoView.as_view(), name='addmemo'),
    path('deletememo/',DeleteMemoView.as_view(), name='deletememo'),
    path('deletetimetable/',DeleteTimeTableView.as_view(), name='deletetimetable'),
    path('showtimetable/',ShowTimeTableView.as_view(), name='showtimetable'),
    path('showmemo/',ShowMemoView.as_view(), name='showmemo'),
    path('searchlecture/',SearchLectureView.as_view(), name='searchlecture'),
    path('showchangegraduate/',ShowchangegraduateView.as_view(), name='showchangegraduate'),
    path('showchangeabeek/',ShowchangeabeekView.as_view(), name='showchangeabeek'),
    path('altereval/',AlterEvalView.as_view(), name='altereval'),
    path('showeval/',ShowEvalView.as_view(), name='showeval'),
    path('showuserinfo/',ShowUserInfoView.as_view(), name='showuserinfo'),

] 
from django.shortcuts import render, HttpResponse
from django.utils.encoding import smart_str
from django.core.files import File
def index(request):
    #Home page of Learning Log
    return render(request, 'app/index.html')

def projekt1(request):
    #Home page of Learning Log
    return render(request, 'app/projekt1.html')

def projekt2(request):
    #Home page of Learning Log
    return render(request, 'app/projekt2.html')
def download_file(request):
    file_name = 'kod.zip'
    #path_to_file = static('app/images/tronn.png')
    response = HttpResponse(content_type='application/force-download')
    response['Content-Disposition'] = 'attachment; filename=%s' % smart_str(file_name)
    return response


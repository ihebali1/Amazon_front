import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  CreateReport(report: any, imageId: string, videoId: string):Observable<any>{
    return this.http.post(
      `${environment.apiUrl}${ENDPOINTS.REPORT_ORDER.GET}`, {...report, image: imageId, video: videoId}
    );
  }

  sendMessage(reportId: string, message: string, imageId: string, videoId: string):Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}${ENDPOINTS.REPORT_ORDER.GET}/${reportId}/message`, {message: message, image: imageId, video: videoId}
    );
  }

  getReportMessages(reportId: string):Observable<any> {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.REPORT_ORDER.GET}/${reportId}/messages`
    );
  }

  getReport(reportId: string):Observable<any> {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.REPORT_ORDER.GET}/${reportId}`
    );
  }
}

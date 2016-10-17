import { TreeNode } from "primeng/components/common/api";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { SiteBrowserService } from "../../core/util/site-browser.service";
export declare class SiteTreetableService {
    private siteBrowserService;
    constructor(siteBrowserService: SiteBrowserService);
    getAssetsUnderSite(siteName: String): Observable<TreeNode[]>;
    getAssetsUnderFolder(siteName: String, uri: string): Observable<TreeNode[]>;
    private extractDataFilter(treeables);
}

function chtoi(e){switch(e){case"x":case"X":return 24;case"y":case"Y":return 25;case"m":case"M":return 26;default:return parseInt(e,10)}}var app=angular.module("app",["ngTouch","ui.grid","ui.grid.cellNav","ui.grid.resizeColumns","ui.grid.selection","ui.grid.moveColumns"]);app.controller("MainCtrl",["$scope","$http","$timeout","$interval","uiGridConstants","$sce",function(e,i){e.gridOptions={enableSorting:!0,enableColumnResizing:!0,enableFiltering:!0,enableGridMenu:!0,headerRowHeight:200,showGridFooter:!1,showColumnFooter:!1,rowIdentity:function(e){return e.id},getRowIdentity:function(e){return e.id},onRegisterApi:function(i){e.gridApi=i},columnDefs:[{displayName:"Chrom. Pos",name:"x",width:150,sortingAlgorithm:function(i,n){var t=e.gridApi.core.sortHandleNulls(i,n);return null!==t?t:(aa=i.split(":"),ba=n.split(":"),ac=chtoi(aa[0]),bc=chtoi(ba[0]),ac<bc?-1:ac>bc?1:(ap=parseInt(aa[1],10),bp=parseInt(ba[1],10),ap<bp?-1:ap>bp?1:0))}},{displayName:"ID",name:"i",width:150,cellTemplate:'<div class="ui-grid-cell-contents"><a href ng-click="grid.appScope.show_rs(row.entity.i)">{{COL_FIELD}}</a></div>'},{displayName:"Gene",name:"ge",width:100,cellTemplate:'<div class="ui-grid-cell-contents"><a href ng-click="grid.appScope.show_gene(row.entity.ge)">{{COL_FIELD}}</a></div>'},{displayName:"Ref",name:"r",width:100,displaySubTitle:"Foo"},{displayName:"Genotype",name:"g",width:150},{displayName:"PEDIA",name:"p",width:100},{displayName:"CADD",name:"s",width:100},{displayName:"Effect/HGVS",name:"e",width:150,cellTemplate:'<div class="ui-grid-cell-contents" title="{{row.entity.h}}"><span>{{COL_FIELD}}</span></div>'},{displayName:"Review",name:"review",width:75,enableColumnMenu:!1,enableFiltering:!1,enableSorting:!1,cellTemplate:'<div align="center"><button ng-click="grid.appScope.clicked(row.entity)">Review</button></div>'},{displayName:"IGV",name:"igv",width:50,enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,cellTemplate:'<div align="center"><button ng-click="grid.appScope.igv_clicked(row.entity.x)">IGV</button></div>'}]},e.show_rs=function(e){rs=e.match(/^rs(\d+)/),rs?url="http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs="+rs[0]:url="http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=",window.open(url,"_blank")},e.show_gene=function(e){url="http://www.genecards.org/cgi-bin/carddisp.pl?gene="+e,window.open(url,"_blank")},e.clicked=function(e){url="/review?chr="+e.x+"&snp="+e.i+"&hgvs="+e.h+"&genotype="+e.g+"&ref="+e.r,window.open(url,"_blank")},e.igv_clicked=function(e){url="http://localhost:60151/goto?locus=chr"+e,window.open(url,"_blank")},url="/vcf_files/get_var/"+gon.vcf_id,i.get(url).success(function(i){e.gridOptions.data=i.variants,$("#var_num").append(i.var_num)})}]).directive("gridLoading",function(){return{restrict:"C",require:"^uiGrid",link:function(e,i,n,t){e.grid=t.grid}}});
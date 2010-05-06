
            var adServer = 'http://192.168.2.6:8081';

			$(document).ready(function() {
			  
			    $("#goBtn").click(function() {
				 var partnerId = $("#partner_id").val();
				 var duration = $("#duration").val();
				 var adContent = $("#ad_content").val();
				 var jsonData = {"partner_id":partnerId,"duration":duration, "ad_content":adContent };
				 
				 $.post(adServer+'/ad/', jsonData ,function(data) {
			     alert("Result: " + data.result);
				},"json");	 
			   });
			 
			   $("#reloadAdBtn").click(function() {
				   alert("reloading ad " + $("#adPartnerId").val())
				   loadAd($("#adPartnerId").val())
					   
			   });
				   
			
			});
			
			
			function callback(ad_obj) {
			    if(ad_obj.error != null)
				{
					$("#exampleAd").hide();
					$("#noAd").show();
				}else
				{
					$("#exampleAd").html("").append(ad_obj.ad_content);
					$("#exampleAd").show();
					$("#noAd").hide();
				}						
			}
			
			function loadAd(partner_id){
				
				$.getScript(adServer + '/ad/'+partner_id);
			}
			
			
			


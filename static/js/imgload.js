//좋아요 상위 4개 요리 가져오기
function get_Cody() {
    $.ajax({
        type: 'GET',
        url: '/rank/Cody', //레시피 가져올 url  필요
        data: {},
        success: function (response) {
            let Cody_list = response['Cody_Lists']
            for (let i = 1; i < 5; i++) {
                let 온도 = api에서 긁어온 온도
                let 옷 번호 = 디비에 저장된 옷번호

                if  온도<10 = 겨울, 10<온도<25 = 여름, 나머지 봄가을

                옷번호 = 계절값에 맞게 옷을 가져온다

                let temp_html = `<!-- 갤러리 -->
                <div class="sub_gallery">
                   <a href="#" data-toggle="modal" data-target="#imgpopup1">
                    <img src="../static/w1.jpg" alt="" width="200">
                  </a>
                </div>
            
                <!--modal-->
            <div class="modal fade" id="imgpopup1" data-keyboard="false">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                  <div class="modal-content">
                  
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">크게 보기</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                        <img class="card-img-top rounded img-fluid" src="../static/w1.jpg">
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    
                  </div>
                </div>
            </div>`
            }

        }
    })

}
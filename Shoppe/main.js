const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const containerH2 = $('.container__nominations-h2')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const DKBtn=$('.header__nav1-login-DK')
const DNBtn=$('.header__nav1-login-DN')
const modal = $('.modal')
const canel=$$('.form-canel')
const formDK=$('.form-1')
const formDN=$('.form-2')
const submitDK=$('.form-submitDK')
const submitDN=$('.form-submitDN')
const topBtns=$$('.container__nominations2-top-list')
const list__Tops= $$('.list-top__story')
const iconsearchMB = $('.header__nav1-logo-icon-mb')

// SuB main


const app={
    storyIndex : 0,
    totalstorymain : 36,
    pagination_itemIndex: 0,
    autoStory : false,
    topstory : 8,
    
    storys : [
        {
            name: 'Bách Luyện Thành Thần',
            image: './assets/img/bach-luyen-thanh-than.jpg',
            chapter :  575,
            oclock : '2 ngày trước'
        },
        {
            name: 'Tu La Võ Thần',
            image: './assets/img/tu-la-vo-than.jpg',
            chapter :  110,
            oclock : '58 phút truoc'
        },
        {
            name: 'Bị Dạy Dỗ Thành Thánh',
            image: './assets/img/bi-day-do-thanh-thanh.jpg',
            chapter :  24,
            oclock : '2 ngày trước'
        },
        {
            name: 'Thương Nguyên Đồ',
            image: './assets/img/thuong-nguyen-do.jpg',
            chapter :  129,
            oclock : '6 phút trước'
        },
        {
            name: 'Thần Võ Thiên Tôn',
            image: './assets/img/than-vo-thien-ton.jpg',
            chapter :  304,
            oclock : '37 phút trước'
        },
        {
            name: 'Yêu Giả Vi Vương',
            image: './assets/img/yeu-gia-vi-vuong.jpg',
            chapter :  212,
            oclock : '1 giờ trước'
        },
        {
            name: 'Ngày Mai Tôi Sẽ Chết',
            image: './assets/img/ngay-mai-toi-se-chet.jpg',
            chapter : 16,
            oclock : '4 ngày trước'
        },
        {
            name: 'Võ Luyện Đỉnh Phong',
            image: './assets/img/vo-luyen-dinh-phong.jpg',
            chapter : 1086,
            oclock : ' 2 giờ trước'
        }
    ],
    storycontainer : [
        {
            name: 'Toàn Chức Pháp Sư',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/127/toan-chuc-phap-su.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : '143.491.292',
            ratings : '4',
            hit_reviews : '150353',
            folow : '81.329',
            like : ' 152',
            comment : '20.098',
            tim : "10.213",
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 'Chapter 685',
                hour : '39 phút trước',
                view : '844'
                },
                {
                chapter : 'Chapter 684',
                hour : '1 ngày trước',
                view : '35.836'
                },
                {
                chapter : 'Chapter 683',
                hour : '2 ngày trước',
                view : '64.163'
                },
                {
                chapter : 'Chapter 682',
                hour : '6 ngày trước',
                view : '92.214'
                },
                {
                chapter : 'Chapter 681',
                hour : '7 ngày trước',
                view : '72.347'
                },
                {
                chapter : 'Chapter 680',
                hour : '9 ngày trước',
                view : '88.564'
                },
                {
                chapter : 'Chapter 679',
                hour : '13 ngày trước',
                view : '105.533'
                },
                {
                chapter : 'Chapter 678',
                hour : '14 ngày trước',
                view : '78.729'
                },
                {
                chapter : 'Chapter 677',
                hour : '16 ngày trước',
                view : '84.715'
                },
                {
                chapter : 'Chapter 676',
                hour : '20 ngày trước',
                view : '102.267'
                },
                {
                chapter : 'Chapter 675',
                hour : '21 ngày trước',
                view : '83.729'
                },
                {
                chapter : 'Chapter 674',
                hour : '23 ngày trước',
                view : '91.402'
                },
                {
                chapter : 'Chapter 673',
                hour : '27 ngày trước',
                view : '107.716'
                },
                {
                chapter : 'Chapter 672',
                hour : '28 ngày trước',
                view : '95.570'
                },{
                chapter : 'Chapter 671',
                hour : '09:14 24/03',
                view : '98.560'
                },
                {
                chapter : 'Chapter 670',
                hour : '07:57 20/03',
                view : '116.762'
                },
                {
                chapter : 'Chapter 669',
                hour : '07:59 19/03',
                view : '95.247'
                },
                {
                chapter : 'Chapter 668',
                hour : '07:59 17/03',
                view : '103.643'
                },
                {
                chapter : 'Chapter 667',
                hour : '08:26 13/03',
                view : '117.673'
                },
                {
                chapter : 'Chapter 666',
                hour : '07:37 12/03',
                view : '93.037'
                },
                {
                chapter : 'Chapter 665',
                hour : '07:50 10/03',
                view : '104.044'
                },
                {
                chapter : 'Chapter 664',
                hour : '07:49 06/03',
                view : '116.302'
                },
                {
                chapter : 'Chapter 663',
                hour : '07:45 05/03',
                view : '98.215'
                },
                {
                chapter : 'Chapter 662',
                hour : '08:17 03/03',
                view : '107.324'
                },
                {
                chapter : 'Chapter 661',
                hour : '08:48 28/02',
                view : '118.895'
                },
                {
                chapter : 'Chapter 660',
                hour : '08:09 27/02',
                view : '105.794'
                },
                {
                chapter : 'Chapter 659',
                hour : '08:39 26/02',
                view : '95.952'
                },
                {
                chapter : 'Chapter 658',
                hour : '08:05 25/02',
                view : '97.257'
                },
                {
                chapter : 'Chapter 657',
                hour : '08:05 24/02',
                view : '98.176'
                },
                {
                chapter : 'Chapter 656',
                hour : '08:30 23/02',
                view : '100.466'
                },
                {
                chapter : 'Chapter 655',
                hour : '08:32 22/02',
                view : '104.239'
                }
            ]
        },
        {
            name: 'Long Ẩn Giả',
            update : '05:49 24/04/2021 ', 
            image: 'http://st.imageinstant.net/data/comics/2/long-an-gia.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action','Manhua',' Supernatural','Truyện Màu'],
            totalview : '9.798.812',
            ratings : '4',
            hit_reviews : '10596',
            folow : '10596',
            like : '47',
            comment : '421 ',
            tim : "100",
            content : 'Các pháp sư undead đều ở trong thành, nữ chủ tịch nữ vương trường học ôm ôm, ma cà rồng, người sói, thiên thần, tất cả đều ngưỡng mộ.',
            listchapter : [
                {
                chapter : 'Chapter 240',
                hour : '1 giờ trước',
                view : '513'
                },
                {
                chapter : 'Chapter 239',
                hour : '1 giờ trước',
                view : '499'
                },
                {
                chapter : 'Chapter 238',
                hour : '10 giờ trước',
                view : '2.504'
                },
                {
                chapter : 'Chapter 237',
                hour : '10 giờ trước',
                view : '2.110'
                },
                {
                chapter : 'Chapter 236',
                hour : '9 ngày trước',
                view : '5.495'
                },
                {
                chapter : 'Chapter 235',
                hour : '9 ngày trước',
                view : '5.058'
                },
                {
                chapter : 'Chapter 234',
                hour : '14 ngày trước',
                view : '6.303'
                },
                {
                chapter : 'Chapter 233',
                hour : '14 ngày trước',
                view : '5.705'
                },
                {
                chapter : 'Chapter 232',
                hour : '16 ngày trước',
                view : '6.716'
                },
                {
                chapter : 'Chapter 231',
                hour : '16 ngày trước',
                view : '6.488'
                },
                {
                chapter : 'Chapter 230',
                hour : '25 ngày trước',
                view : '9.462'
                },
                {
                chapter : 'Chapter 229',
                hour : '25 ngày trước',
                view : '7.945'
                },
                {
                chapter : 'Chapter 228',
                hour : '27 ngày trước',
                view : '9.530'
                },
                {
                chapter : 'Chapter 227',
                hour : '27 ngày trước',
                view : '8.560'
                },{
                chapter : 'Chapter 226',
                hour : '28 ngày trước',
                view : '9.634'
                },
                {
                chapter : 'Chapter 225',
                hour : '28 ngày trước',
                view : '8.929'
                },
                {
                chapter : 'Chapter 224',
                hour : '29 ngày trước',
                view : '10.333'
                },
                {
                chapter : 'Chapter 223',
                hour : '29 ngày trước',
                view : '9.413'
                },
                {
                chapter : 'Chapter 222',
                hour : '29 ngày trước',
                view : '10.642'
                },
                {
                chapter : 'Chapter 221',
                hour : '29 ngày trước',
                view : '9.734'
                },
                {
                chapter : 'Chapter 220',
                hour : '06:01 24/03',
                view : '11.476'
                },
                {
                chapter : 'Chapter 219',
                hour : '06:01 24/03',
                view : '9.170'
                },
                {
                chapter : 'Chapter 218',
                hour : '06:01 24/03',
                view : '9.549'
                },
                {
                chapter : 'Chapter 217',
                hour : '06:01 24/03',
                view : '9.210'
                },
                {
                chapter : 'Chapter 216',
                hour : '06:01 24/03',
                view : '10.123'
                },
                {
                chapter : 'Chapter 215',
                hour : '06:01 24/03',
                view : '8.372'
                },
                {
                chapter : 'Chapter 214',
                hour : '06:01 24/03',
                view : '9.246'
                },
                {
                chapter : 'Chapter 213',
                hour : '06:01 24/03',
                view : '10.238'
                },
                {
                chapter : 'Chapter 212',
                hour : '06:01 24/03',
                view : '3.487'
                },
                {
                chapter : 'Chapter 211',
                hour : '06:01 24/03',
                view : '6.484'
                },
                {
                chapter : 'Chapter 210',
                hour : '05:01 24/03',
                view : '10.216'
                }
            ]
        },
        {
            name: 'Nghịch Thiên Chiến Thần',
            update : '15:59 24/04/2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/78/nghich-thien-chien-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action','Adventure','Manhua','Truyện Màu','Xuyên Không'],
            totalview : '18.431.197',
            ratings : '4',
            hit_reviews : '19558',
            folow : '41.338',
            like : ' 50',
            comment : '788',
            tim : "123",
            content : 'Trăm năm trước, nhất đại chiến thần lá Khinh Vân hoành không xuất thế, nghiền ép các lộ thiên kiêu chi tử, khiến địch nhân nghe tin đã sợ mất mật, nhưng không ngờ bị người yêu Lạc linh, huynh đệ sói mười ba phản bội, vẫn lạc mười ma vực sâu! Trăm năm sau, các giới tiến vào thời đại hoàng kim, yêu nghiệt nhân vật điên cuồng hiện lên! Lá Khinh Vân trùng sinh đến Bát Hoang trong đại lục.',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Boruto',
            update : '16:05 24/04/2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/148/boruto.jpg',
            author : 'Ikemoto Mikio - Kishimoto Masashi - Kodachi Ukyou',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '13.245.398',
            ratings : '3',
            hit_reviews : '3675',
            folow : '5.341',
            like : ' 36',
            comment : '10.034',
            tim : "5.264",
            content : 'Boruto là phần tiếp nối của siêu phẩm Naruto huyền thoại. Trong phần này, truyện tập trung vào cậu bé Boruto, con trai của Naruto. Truyện mở đầu bằng cảnh làng lá hoang tàn và một nhân vật bí ẩn tuyên bố về cái chết của Naruto cùng sự chấm dứt của thời đại Ninja hoàng kim. Chuyện gì đã xảy ra? Số phận của các nhân vật như Naruto, Sasuke… ra sao? Và vì sao Boruto lại đeo băng đô với biểu tượng làng lá bị cắt ngang?',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Võ Luyện Đỉnh Phong',
            update : '18:51 24/04/2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/32/vo-luyen-dinh-phong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '196.771.177',
            ratings : '4',
            hit_reviews : '214048',
            folow : '97.437',
            like : '2673',
            comment : '30.759',
            tim : "3.254",
            content : 'Võ đạo đỉnh phong, là cô độc, là tịch mịch, là dài đằng đẵng cầu tác, là cao xử bất thắng hàn'
            +'Phát triển trong nghịch cảnh, cầu sinh nơi tuyệt địa, bất khuất không buông tha, mới có thể có thể phá võ chi cực đạo.'
            +'Lăng Tiêu các thí luyện đệ tử kiêm quét rác gã sai vặt Dương Khai ngẫu lấy được một bản vô tự hắc thư, từ nay về sau đạp vào dài đằng đẵng võ đạo.',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Tu La Võ Thần',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/43/tu-la-vo-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thần Võ Thiên Tôn',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/198/than-vo-thien-ton.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Bách Luyện Thành Thần',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/84/bach-luyen-thanh-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Bị Dạy Dỗ Thành Thánh',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/28/bi-day-do-thanh-thanh.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thương Nguyên Đồ',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/236/thuong-nguyen-do.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, 
        {
            name: 'Yêu Giả Vi Vương',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/221/yeu-gia-vi-vuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Ngày Mai Tôi Sẽ Chết',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/158/ngay-mai-toi-se-chet.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Ma Đầu Vạn Ác Năm Tuổi Rưỡi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/62/ma-dau-van-ac-nam-tuoi-ruoi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Nữ Chủ Người Đàn Ông Của Bạn Bị Hỏng Rồi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/35/nu-chu-nguoi-dan-ong-cua-ban-bi-hong-roi-4060.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Độc Bộ Tiêu Dao',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/26/doc-bo-tieu-dao.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Dị Tộc Trùng Sinh',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/80/di-toc-trung-sinh.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Bokutachi wa Hanshoku wo Yameta',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/116/bokutachi-wa-hanshoku-wo-yameta.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Ta Có Một Sơn Trại',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/217/ta-co-mot-son-trai.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Mạt Thế Vi Vương',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/74/mat-the-vi-vuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Đằng Nữ',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/158/dang-nu.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Quân Đoàn Nữ Tử Ngày Tận Thế Của Tôi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/58/quan-doan-nu-tu-ngay-tan-the-cua-toi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, 
        {
            name: 'Ta có chín nữ đồ đệ',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/104/ta-co-chin-nu-do-de.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Vĩnh Hằng Chí Tôn',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/101/vinh-hang-chi-ton.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Ta Trở Về Từ Chư Thiên Vạn Giới',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/122/ta-tro-ve-tu-chu-thien-van-gioi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Ta là Đại Hoàn Đan',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/183/ta-la-dai-hoan-dan.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Trọng Sinh Thành Cậu Vàng Tại Dị Thế',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/104/trong-sinh-thanh-cau-vang-tai-di-the.png',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Xuyên Không Vào Thế Giới Nữ Cường',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/226/xuyen-khong-vao-the-gioi-nu-cuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thương Khung Bảng Chi Thánh Linh Kỷ',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/53/thuong-khung-bang-chi-thanh-linh-ky.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Đô Thị Đỉnh Phong Cao Thủ',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/122/do-thi-dinh-phong-cao-thu.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, 
        {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.imageinstant.net/data/comics/169/hoa-hong-nien-dai-hac-cot-duong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        },
        {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.imageinstant.net/data/comics/174/toi-la-tho-san-co-ki-nang-tu-sat-cap-sss-288.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.imageinstant.net/data/comics/196/arcane-sniper.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.imageinstant.net/data/comics/113/nghe-thay-am-thanh-ngan-ha-roi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.imageinstant.net/data/comics/82/tieu-thu-be-bong-dang-yeu.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, {
            name: 'Thông Linh Phi',
            update : '16:59 21/ 04/ 2021 ', 
            image: 'http://st.nhattruyen.com/data/comics/143/thong-linh-phi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Comedi','Historical','Manhua',' Mystery','Ngôn Tình','Romance','Shoujo','Truyện Màu'],
            totalview : '124.688.613',
            ratings : '4',
            hit_reviews : '137510',
            folow : '47.574',
            like : ' 36',
            comment : '22.034',
            tim : "34.213",
            content : 'Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))... Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...',
            listchapter : [
                {
                chapter : 'Chapter 666',
                hour : '9 giờ trước',
                view : '8.075'
                },
                {
                chapter : 'Chapter 665',
                hour : '15 giờ trước',
                view : '85.075'
                },
                {
                chapter : 'Chapter 664',
                hour : '23 giờ trước',
                view : '813.741'
                },
                {
                chapter : 'Chapter 663',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 662',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 661',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 660',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 659',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 658',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 657',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 656',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 655',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 654',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 653',
                hour : '10/3/2021',
                view : '834.211'
                },{
                chapter : 'Chapter 652',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 651',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 650',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 649',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 648',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 647',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 646',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 645',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 644',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 643',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 642',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 641',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 640',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 639',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 638',
                hour : '10/3/2021',
                view : '834.211'
                },
                {
                chapter : 'Chapter 637',
                hour : '10/3/2021',
                view : '834.211'
                }
            ]
        }, 
        
    ],
    render : function(){
        const htmls = this.storys.map((story,index)=>{
            return `
            <li class="nomianations__list-item-story col l-2-4 m-3 k-4 c-6 ">
            <div  class="nomianations__item-alll">
                <img class="nomianations__item-story-img" src="${story.image}" alt="">
                <div class="nomianations__item-information">
                <a href="" class="nav2__story-cmt" >
                    <h2 class="nomianations-information-ctm">${story.name} </h2>
                </a>
                <div class="nomianations-information-chap-hour">
                    <a href="" class="nomianations-information-chap">
                        Chapters${story.chapter}
                    </a>
                    <h3 class="nomianations-information-hour">
                        <i class="far fa-clock"></i>
                        ${story.oclock}
                    </h3>
                </div>
            </div>
            </div>
            
        </li>
             `
        
        })
       
        containerH2.innerHTML = htmls.join('')
    },
    rendercontainer : function(){
        const htmls= this.storycontainer.map(story=>{
            const htmlcategory = story.category.map(categorys=>{
                return `
                <a href="" class="sub-container__item-category">${categorys}</a>
                    <span>-</span>
                `
            })
            
            const htmlchapter= story.listchapter.map((chapter,index)=>{
                return `<li class="sub-container__list-chapter ${index===18?'height-chapter' : ''}">
                <a href="" class="sub-container__item-chapter">${chapter.chapter}</a>
                <span class="sub-container__item-hour">${chapter.hour}</span>
                <span class="sub-container__item-hour">${chapter.view}</span>
                </li>`
            })
            return`
            <div class="container__nominationssub active col l-12 m-12">
            <div class="sub-container__pate">
                <a class="sub-container__pate-item">Trang Chủ
                    <i class="fas fa-angle-double-right"></i>
                </a>
                <a class="sub-container__pate-item">Thể Loại
                    <i class="fas fa-angle-double-right"></i>
                </a>
                <a class="sub-container__pate-item">${story.name}</a>
            </div>
            <div class="row sub-container__content">
                <div class="sub-container__content-img col l-4 m-4 c-12">
                    <img src="${story.image}" alt="">
                </div>
                <div class="sub-container__content-story col l-8 m-8 c-12">
                    <div class="sub-container__content-first">
                        <h2 class="sub-container__first-name">${story.name}</h2>
                        <h3 class="sub-container__first-hour">[ Cập nhật lúc: ${story.update} ]</h3>
                    </div>
                    <ul class="sub-container__content-second">
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fas fa-user"></i>
                                Tác Giả</h3>
                            <h3 class="sub-container__item-left">${story.author}</h3>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-rss"></i>
                                Tình Trạng</h3>
                            <h3 class="sub-container__item-left">${story.status}</h3>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-tags"></i>
                                Thể loại</h3>
                            <div class="sub-container__list-category">
                                ${htmlcategory.join('')}
                            </div>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-eye"></i>
                                Lượt Xem</h3>
                            <h3 class="sub-container__item-left">${story.totalview}</h3>
                        </li>
                    </ul>
                    <div class="sub-container__ratings">
                        <a class="sub-container__ratings-name">${story.name}</a>
                        <h3 class="sub-container__ratings-content">Xếp hạng: ${story.ratings}/5 - ${story.hit_reviews} Lượt đánh giá.</h3>
                    </div>
                    <div class="sub-container__list-stars">
                        <div class="sub-container__stars-item ">
                        <i class="fas fa-star sub-container__stars color-star"></i>
                        <i class="fas fa-star sub-container__stars color-star"></i>
                        <i class="fas fa-star sub-container__stars color-star"></i>
                        <i class="fas fa-star sub-container__stars color-star"></i>
                        <i class="fas fa-star sub-container__stars"></i>
                        </div>
                        <a href="" class="sub-container__like">
                            <i class="far fa-thumbs-up"></i>
                            Like <span>${story.like}</span>
                        </a>
                        <a href="" class="sub-container__like">
                            Share
                        </a>
                    </div>
                    <div class="sub-container__list-follow">
                            <a href="" class="sub-container__follow-item btn-sub__container">
                                <i class="fa fa-heart"></i>
                                Theo dõi
                            </a>
                        
                        <h3 class="sub-container__number-follow">${story.folow}</h3>
                        <h4 class="sub-container__user-follow">Người theo dõi</h4>
                    </div>
                    <div class="sub-container__case-read">
                        <a href="" class=" btn-sub__container">
                            Đọc từ đầu
                        </a>
                        <a href="" class=" btn-sub__container">
                            Đọc mới nhất
                        </a>
                    </div>
                </div>
            </div>
            <div class="sub-container__plot">
                <h2 class="sub-container__plot-header ">
                    <i class="far fa-file-alt"></i>
                    NỘI DUNG
                </h2>
                <h3 class="sub-container__plot-content plot-height">
                        ${story.content} 
                </h3>
                <a href="" class="sub-container__plot-next">
                    Xem thêm
                    <i class="fas fa-angle-right"></i>
                </a>
                <a href="" class="sub-container__plot-prev active">
                    <i class="fas fa-angle-left"></i>
                    Thu hồi
                </a>
            </div>
            <div class="sub-container__chapter-story">
                <h2 class="sub-container__chapter-header ">
                    <i class="fas fa-align-justify"></i>
                   DANH SÁCH CHƯƠNG
                </h2>
                
                <div class=" sub-container__chapters">
                    <div class="sub-container__chapter-first">
                        <span class="sub-container__chapter-int">Số Chương</span>
                        <span class="sub-container__chapter-update">Cập Nhật</span>
                        <span class="sub-container__chapter-update">Lượt Xem</span>
                    </div>
                    <ul class="sub-container__chapter-second height-chapter">
                        ${htmlchapter.join('')}
                    </ul>
                    <div class="sub-container__chapter-last">
                        <a href="" class="sub-container__chapter-then active ">
                            <i class="fas fa-plus"></i>
                            Xem Thêm 
                        </a>
                        <a href="" class="sub-container__chapter-back">
                            
                            Thu Hồi
                        </a>
                    </div>
                </div>
            </div>
        </div>
            `
           
        })
        
         $('.container__nominations2-sub').innerHTML= htmls.join(' ')
    },
    rendercontainerMain : function(){var next 
        if(this.storycontainer.length/this.totalstorymain===0){
            next=this.storycontainer.length/this.totalstorymain
        }else{
            next=Math.floor(this.storycontainer.length/this.totalstorymain)+1
        }
        const htmls= this.storycontainer.map((story,i)=>{
            const htmlchap= story.listchapter.map((chapter,index)=>{
                if(index<3){
                    return `
                    <div class="nav2__list-item-cmt">
                    <a href="" class="nav2__item-chap">${chapter.chapter}</a>
                    <h4 class="nav2__item-hour">${chapter.hour}</h4>
                    </div>
                    `
                }
            })
            return `
            <div class="nomianations2__list-item-story ${i<this.totalstorymain ? 'active' : ''} col l-3 m-3 k-4 c-6">       
                <a href="">
                    <img class="nomianations2__item-story-img" src="${story.image}" alt="">
                    <div class="nav2__item-like">
                    <h5><i class="far fa-eye"></i>
                    ${story.totalview}</h5>
                    <h5><i class="fas fa-comment"></i>
                    ${story.comment}</h5>
                    <h5><i class="fas fa-heart"></i>
                    ${story.tim}</h5>
                    </div>
                </a>
                
        
                <a href="" class="nav2__story-cmt">
                    <h3 class="nav2__item-cmt-story">${story.name}</h3>
                </a>
                <span class="${i<10 ? 'icon-hot ': ''}"></span>
                ${htmlchap.join('')}
                </div>
            
            `
        })
        var htmlnext =''
            for(var i=0;i<next;i++){
                htmlnext=htmlnext + `
                <li class="pagination-item ${i===0? 'pagination-item__active': ''} ">
                <a href=""class="pagination-item__link">
                   ${i+1}
                </a>
            </li>
                `
        }
        $('.container__nominations2-list').innerHTML=htmls.join('')
        $('.pagination').innerHTML= htmlnext
    },
    biendoichuoi : function(x){
        var y=0;
        for(var i=0;i<x.length;i++){
            if(x[i]!=='.'){
                y =y*10 + Number(x[i]) 
            }
        }
        return y
    },
    renderTop : function(){
        var j=0
        const _this =this
        this.storycontainer.sort(function(a,b){
            return _this.biendoichuoi(b.totalview) - _this.biendoichuoi(a.totalview)
        })
        
        const html = this.storycontainer.map((story,i)=>{
            j++;
            if(i<10){
            return ` 
            <div class="row top-story__item">
            <div class="top-story__item-left col l-4 m-2 c-3">
                <span class="top-story__item-stt top${j}">${j<10 ? `0${j}` : j }</span>
                <a href="" class="top-story__item-img">
                    <img src="${story.image}" alt="" class="top-story__img">
                </a>
            </div>
            <div class="top-story__item-information col l-8 m-10 c-9">
                <a href="" class="top-story__item-name">
                    <h4 class="top-story__name">${story.name}</h4>
                </a>
                <div class="item-information__chap-eye">
                    <a href="" class="item-information__chap">${story.listchapter[0].chapter}</a>
                    <h5 class="item-information__eye">
                        <i class="far fa-eye"></i>
                        ${story.totalview}</h5>
                </div>
            </div>
           
        </div>
            `
            }
        })
        $('.list-top__story').innerHTML = html.join('')
    },
    handelEventStory : function(){
        // this.render()
        const listStoryAuto = $$('.nomianations__list-item-story ')
        const listStorysSUB = $$('.container__nominationssub.active')
        const listStorys=$$('.nomianations2__list-item-story')
        const listnextND = $$('.sub-container__plot-next')
        const listcontent = $$('.sub-container__plot-content')
        const listprevND = $$('.sub-container__plot-prev')
        const listnextChap = $$('.sub-container__chapter-then')
        const listprevChap = $$('.sub-container__chapter-back')
        const listChapters = $$('.sub-container__chapter-second')
        const listChapItem = $$('.sub-container__list-chapter:nth-child(19)')
        const _this = this
        listStorys.forEach((story,index)=>{
            story.onclick = function(e){
                $('.container__nav1').classList.add('active')
                $('.container__nominations2-cmt').classList.add('active')
                $('.container__nominations2 ').classList.add('active')
                $('.container__nominations2-sub').classList.remove('active')
                $('.new-cmt').classList.add('active')
                listStorysSUB[index].classList.remove('active')
                e.preventDefault()
            }
        })
        listnextND.forEach((next,index)=>{
            next.onclick=function(e){
                $('.sub-container__plot-next').classList.remove('active')
                this.classList.add('active')
                listprevND[index].classList.remove('active')
                listcontent[index].classList.remove('plot-height')
                 e.preventDefault()
            }
        })
        listprevND.forEach((prev,index)=>{
            prev.onclick=function(e){
                $('.sub-container__plot-prev').classList.remove('active')
                this.classList.add('active')
                listnextND[index].classList.remove('active')
                listcontent[index].classList.add('plot-height')
                 e.preventDefault()
            }
        })
        listnextChap.forEach((next,index)=>{
            next.onclick= function(e){
            this.classList.remove('active')
            listprevChap[index].classList.add('active')
            listChapters[index].classList.remove('height-chapter')
            listChapItem[index].classList.remove('height-chapter')
             e.preventDefault()
            }
            
        })
        listprevChap.forEach((prev,index)=>{
            prev.onclick= function(e){
            this.classList.remove('active')
            listnextChap[index].classList.add('active')
            listChapters[index].classList.add('height-chapter')
            listChapItem[index].classList.add('height-chapter')
             e.preventDefault()
            }
            
        })
        // this.rendercontainer()
        // this.rendercontainerMain()
        const pagination_items = $$('.pagination-item')
        const nextmainBtn= $('.pagination-item-icon-next')
        const prevmainBtn= $('.pagination-item-icon-prev')
        // Main next
        pagination_items.forEach((pagination_item,index)=>{
            pagination_item.onclick= function(e){
                $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                for(var i=0;i<listStorys.length;i++){
                    if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                        listStorys[i].classList.add('active')
                    }
                    else listStorys[i].classList.remove('active')
                }
                console.log(listStorys.length)
                this.classList.add('pagination-item__active')
                nextmainBtn.onclick= function(e){
                    index++
                    var x= pagination_items.length
                    if(index>=x){
                        index=0
                    }
                    if(index>4&&index<x){
                        for(var i=0;i<index-4;i++){
                            pagination_items[i].classList.add('active')
                        }
                    }else {
                        pagination_items[index].classList.remove('active')
                        pagination_items[1].classList.remove('active')
                    }
                    $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                    pagination_items[index].classList.add('pagination-item__active')
                    for(var i=0;i<listStorys.length;i++){
                        if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                            listStorys[i].classList.add('active')
                        }
                        else listStorys[i].classList.remove('active')
                    }
                    console.log(index)
                    e.preventDefault()
                }
                prevmainBtn.onclick= function(e){
                    index--
                    var x= pagination_items.length
                    if(index<0){
                        index=x-1
                    }
                    if(index>4&&index<x){
                        for(var i=0;i<index-4;i++){
                            pagination_items[i].classList.add('active')
                        }
                    }else pagination_items[index].classList.remove('active')
                    $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                    pagination_items[index].classList.add('pagination-item__active')
                    for(var i=0;i<listStorys.length;i++){
                        if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                            listStorys[i].classList.add('active')
                        }
                        else listStorys[i].classList.remove('active')
                    }
                    
                    e.preventDefault()
                }
                e.preventDefault()
            }
        })
        nextmainBtn.onclick= function(e){
            _this.pagination_itemIndex++
            var x= pagination_items.length
            if(_this.pagination_itemIndex>=x){
                _this.pagination_itemIndex=0
            }
            if(_this.pagination_itemIndex>4&&_this.pagination_itemIndex<x){
                for(var i=0;i<_this.pagination_itemIndex-4;i++){
                    pagination_items[i].classList.add('active')
                }
            }else {
                pagination_items[_this.pagination_itemIndex].classList.remove('active')
                pagination_items[1].classList.remove('active')
            }
            $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
            pagination_items[_this.pagination_itemIndex].classList.add('pagination-item__active')
            for(var i=0;i<listStorys.length;i++){
                if(((_this.pagination_itemIndex*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(_this.pagination_itemIndex+1)))){
                    listStorys[i].classList.add('active')
                }
                else listStorys[i].classList.remove('active')
            }
            console.log(_this.pagination_itemIndex)
            e.preventDefault()
        }
        prevmainBtn.onclick= function(e){
            _this.pagination_itemIndex--
            var x= pagination_items.length
            if(_this.pagination_itemIndex<0){
                _this.pagination_itemIndex=x-1
            }
            if(_this.pagination_itemIndex>4&&_this.pagination_itemIndex<x){
                for(var i=0;i<_this.pagination_itemIndex-4;i++){
                    pagination_items[i].classList.add('active')
                }
            }else pagination_items[_this.pagination_itemIndex].classList.remove('active')
            $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
            pagination_items[_this.pagination_itemIndex].classList.add('pagination-item__active')
            for(var i=0;i<listStorys.length;i++){
                if(((_this.pagination_itemIndex*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(_this.pagination_itemIndex+1)))){
                    listStorys[i].classList.add('active')
                }
                else listStorys[i].classList.remove('active')
            }
            console.log(_this.pagination_itemIndex)
            e.preventDefault()
        }
        // Top story nomination 1
        var ArrayCT =[]
        this.storys.forEach((story,i)=>{
            this.storycontainer.forEach((storyCT,j)=>{
                if(story.name.trim() === storyCT.name.trim()){
                    ArrayCT[i]=j
                }
            })
        })
        listStoryAuto.forEach((story,i)=>{
            story.onclick = function(e){
                $('.container__nav1').classList.add('active')
                $('.container__nominations2-cmt').classList.add('active')
                $('.container__nominations2 ').classList.add('active')
                $('.container__nominations2-sub').classList.remove('active')
                $('.new-cmt').classList.add('active')
                listStorysSUB[ArrayCT[i]].classList.remove('active')
                
                e.preventDefault()
            }
        })
        // Khi next
        nextBtn.onclick = function (e){
            
            let i=[]
            i= ArrayCT.shift(0)
            ArrayCT.push(i)
            _this.nextStory()
            
            e.preventDefault()
            _this.render()
            const listStoryAuto = $$('.nomianations__list-item-story ')
            const listStorysSUB = $$('.container__nominationssub.active')
            // _this.rendercontainer()
            listStoryAuto.forEach((story,i)=>{
                story.onclick = function(e){
                    $('.container__nav1').classList.add('active')
                    $('.container__nominations2-cmt').classList.add('active')
                    $('.container__nominations2 ').classList.add('active')
                    $('.container__nominations2-sub').classList.remove('active')
                    $('.new-cmt').classList.add('active')
                    listStorysSUB[ArrayCT[i]].classList.remove('active')
                    
                    e.preventDefault()
                }
            })
            
        }
        prevBtn.onclick = function(e){
            let x=ArrayCT.length-1
            let y=[]
            y=ArrayCT.pop(x)
            ArrayCT.splice(0,0,y)
           _this.prevStory()
           _this.render()
            e.preventDefault()
            const listStoryAuto = $$('.nomianations__list-item-story ')
            const listStorysSUB = $$('.container__nominationssub.active')
            // _this.rendercontainer()
            listStoryAuto.forEach((story,i)=>{
                story.onclick = function(e){
                    $('.container__nav1').classList.add('active')
                    $('.container__nominations2-cmt').classList.add('active')
                    $('.container__nominations2 ').classList.add('active')
                    $('.container__nominations2-sub').classList.remove('active')
                    $('.new-cmt').classList.add('active')
                    listStorysSUB[ArrayCT[i]].classList.remove('active')
                    
                    e.preventDefault()
                }
            })
        }
        // tu dong next
         setInterval(()=>
        nextBtn.click()
        ,3000)
        
    },
    handelEvent : function(){
        const _this = this
        


        // Form dang ky
        DKBtn.onclick = function(e){
            _this.clickDK()
            e.preventDefault()
        }
        // Dang nhap
        DNBtn.onclick=function(e){
            _this.clickDN()
            e.preventDefault()
        }
        canel.forEach((canelIndex)=>{
            canelIndex.onclick = function(e){
                modal.classList.remove('active')
                e.preventDefault()
            }
        })
        var modal__overlayclick= 0;
        $('.modal__overlay').onclick = function(){
            modal__overlayclick++;
            if(modal__overlayclick>1){
                modal__overlayclick=0
                modal.classList.remove('active')
            }
        }
        
        // Submit DN
        submitDN.onclick = function(e){
            formDN.classList.add('active')
            formDK.classList.remove('active')
            e.preventDefault()
        }
        submitDK.onclick = function(e){
            formDK.classList.add('active')
            formDN.classList.remove('active')
            e.preventDefault()


        }
        
        // Top Story
        topBtns.forEach((topBtn,index)=>{
            var list__Top=list__Tops[index]
            topBtn.onclick= function(e){
                $('.container__nominations2-top-list.top-color').classList.remove('top-color')
                $('.list-top__story.active').classList.remove('active')

                this.classList.add('top-color')
                list__Top.classList.add('active')

                e.preventDefault()
            }
           
        })
        


        // search MB
        let xx=0
        iconsearchMB.onclick = function(e){
            xx++
            if(xx===1){
            $('.menuMB').classList.add('active')
            $('.menu-openMB').classList.add('active')
            
            }
            else{
                xx=0
                $('.menuMB').classList.remove('active')
                $('.menu-openMB').classList.remove('active')
            }
            $('.menu-list-openMB').classList.remove('active')
            $('.header__nav1-list-mb').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            e.preventDefault()
        }
        // List Mobile
        $('.header__nav1-list-mb').onclick = function(){
            xx=0
            $('.menu-list-openMB').classList.add('active')
            $('.header__nav1-list-mb').classList.add('active')
            $('.header__nav1-exit-mb').classList.remove('active')
            $('.menuMB').classList.add('active')
            $('.menu-openMB').classList.remove('active')
        }
        $('.header__nav1-exit-mb').onclick = function(){
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            $('.menuMB').classList.remove('active')
        }
        // DN MB
        $('.list-formMB-itemDN').onclick=function(e){
            
            $('.menuMB').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            _this.clickDN()
            e.preventDefault()
        }
        $('.list-formMB-itemDK').onclick=function(e){
            $('.menuMB').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            _this.clickDK()
            e.preventDefault()
        }
        // Khi keo main
            window.onscroll = function(){
                const scroll=document.documentElement.scrollTop||window.scrollY
                if(scroll>$('.header__1').offsetHeight){
                    $('.header__1').classList.add('active')
                    $('.header__2').classList.add('fixed')
                    $('.back-to__main').classList.add('active')
                }else{
                    $('.header__1').classList.remove('active')
                    $('.header__2').classList.remove('fixed')
                    $('.back-to__main').classList.remove('active')
                }
                $('.back-to__main').onclick = function(){
                    jQuery('html,body').animate({
                        scrollTop: 0
                    },1400);
                }
            }
       
    },
    // Xu ly su kien sub main
    handelEventSUB : function(){
        this.rendercontainer()
        this.rendercontainerMain()
        this.render()
        this.renderTop()
        const _this =this
        
        
     },
    clickDN : function(){
        modal.classList.add('active')
        formDN.classList.add('active')
        formDK.classList.remove('active')
    },
    clickDK : function(){
        modal.classList.add('active')
        formDK.classList.add('active')
        formDN.classList.remove('active')
    },
    nextStory : function(){
        let x = []
        x= this.storys.shift(0)
        this.storys.push(x)
        
    },
    
    prevStory : function(){
        let x=this.storys.length-1
        let y=[]
        y=this.storys.pop(x)
        this.storys.splice(0,0,y)
        
    },
    start : function(){
        this.handelEvent()

        this.handelEventSUB()

        this.handelEventStory()

        // this.render()

        
    }
}
app.start()
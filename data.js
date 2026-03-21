const questionBank = [
  {
    "id": 1,
    "question": "Khi nâng vật nặng lên khỏi mặt đất từ 10-20cm, người vận hành phải làm gì?",
    "options": [
      "Nâng thật nhanh lên cao",
      "Dừng lại kiểm tra độ ổn định và phanh",
      "Xoay cần ngay lập tức",
      "Hạ xuống và nghỉ"
    ],
    "answer": "Dừng lại kiểm tra độ ổn định và phanh",
    "explain": "Thử tải tĩnh tại chỗ để đảm bảo phanh và cáp chịu được lực thực tế."
  },
  {
    "id": 2,
    "question": "Tín hiệu 'Dừng khẩn cấp' được thực hiện khi nào?",
    "options": [
      "Khi thấy mỏi tay",
      "Khi có bất kỳ nguy hiểm nào xảy ra",
      "Khi hết giờ làm việc",
      "Khi có người lạ đi qua"
    ],
    "answer": "Khi có bất kỳ nguy hiểm nào xảy ra",
    "explain": "Dừng mọi chuyển động để bảo vệ tính mạng và tài sản."
  },
  {
    "id": 3,
    "question": "Góc nghiêng của dây cáp khi nâng hàng so với phương thẳng đứng tốt nhất là bao nhiêu?",
    "options": [
      "0 độ (Thẳng đứng)",
      "15 độ",
      "30 độ",
      "45 độ"
    ],
    "answer": "0 độ (Thẳng đứng)",
    "explain": "Tránh lực quán tính ngang làm lắc vật nâng hoặc lật cần."
  },
  {
    "id": 4,
    "question": "Khi vật nâng đang ở trên cao, người vận hành có được rời khỏi cabin không?",
    "options": [
      "Có, nếu đã khóa phanh",
      "Tuyệt đối không được rời vị trí",
      "Có, nếu xuống đi vệ sinh nhanh",
      "Có, nếu có người trông hộ"
    ],
    "answer": "Tuyệt đối không được rời vị trí",
    "explain": "Luôn phải kiểm soát vật nâng để xử lý tình huống bất ngờ."
  },
  {
    "id": 5,
    "question": "Tại sao không được kéo lê vật nặng bằng cần trục?",
    "options": [
      "Làm hỏng cỏ",
      "Gây lực ngang cực lớn làm lật hoặc gãy cần",
      "Làm vật bị trầy xước",
      "Tốn nhiên liệu"
    ],
    "answer": "Gây lực ngang cực lớn làm lật hoặc gãy cần",
    "explain": "Cần trục được thiết kế để nâng thẳng đứng, không chịu được lực kéo ngang lớn."
  },
  {
    "id": 6,
    "question": "Trước khi nâng tải, người vận hành cần biết thông tin gì quan trọng nhất?",
    "options": [
      "Màu sắc của vật nâng",
      "Trọng lượng của vật nâng và giới hạn tải của máy",
      "Tên của người móc cáp",
      "Giá trị của món hàng"
    ],
    "answer": "Trọng lượng của vật nâng và giới hạn tải của máy",
    "explain": "Tránh tình trạng quá tải gây đứt cáp hoặc đổ cần."
  },
  {
    "id": 7,
    "question": "Khi làm việc gần đường dây điện cao thế, khoảng cách an toàn phụ thuộc vào yếu tố nào?",
    "options": [
      "Chiều dài của cần",
      "Điện áp của đường dây",
      "Thời tiết",
      "Kinh nghiệm người lái"
    ],
    "answer": "Điện áp của đường dây",
    "explain": "Điện áp càng cao thì khoảng cách phóng điện càng xa, yêu cầu khoảng cách an toàn lớn hơn."
  },
  {
    "id": 8,
    "question": "Loại cáp thép nào thường được dùng trong thiết bị nâng?",
    "options": [
      "Cáp có lõi thực vật",
      "Cáp thép chuyên dụng chống xoắn",
      "Dây thừng nilon",
      "Dây kẽm buộc"
    ],
    "answer": "Cáp thép chuyên dụng chống xoắn",
    "explain": "Đảm bảo vật nâng không bị xoay tròn khi nâng hạ."
  },
  {
    "id": 9,
    "question": "Thiết bị bảo vệ 'Limit Switch' có tác dụng gì?",
    "options": [
      "Tăng tốc độ nâng",
      "Ngắt truyền động khi móc cẩu chạm tới giới hạn chiều cao",
      "Để bật đèn cabin",
      "Để đo trọng lượng"
    ],
    "answer": "Ngắt truyền động khi móc cẩu chạm tới giới hạn chiều cao",
    "explain": "Ngăn chặn việc móc cẩu đâm vào đầu cần gây đứt cáp."
  },
  {
    "id": 10,
    "question": "Khi thấy dây cáp bị nổ (đứt nhiều sợi lẻ), người vận hành nên làm gì?",
    "options": [
      "Tiếp tục làm việc bình thường",
      "Bôi thêm mỡ vào để che đi",
      "Ngừng sử dụng và yêu cầu thay thế cáp",
      "Buộc dây kẽm vào chỗ đứt"
    ],
    "answer": "Ngừng sử dụng và yêu cầu thay thế cáp",
    "explain": "Dây cáp không đảm bảo hệ số an toàn sẽ gây đứt đột ngột khi tải hàng."
  },
  {
    "id": 11,
    "question": "Ý nghĩa của chân chống (Outriggers) đối với cần trục bánh lốp là gì?",
    "options": [
      "Để xe trông cao hơn",
      "Tăng diện tích chân đế và độ ổn định chống lật",
      "Để thay lốp xe dễ hơn",
      "Để giảm tiêu hao dầu"
    ],
    "answer": "Tăng diện tích chân đế và độ ổn định chống lật",
    "explain": "Chân chống giúp chuyển trọng tâm và lực tỳ lên mặt đất vững chãi hơn."
  },
  {
    "id": 12,
    "question": "Trong điều kiện gió lớn vượt mức quy định, thao tác đúng là gì?",
    "options": [
      "Cố gắng làm nhanh cho xong",
      "Dừng công việc, hạ tải và thu cần về vị trí an toàn",
      "Xoay cần ngược hướng gió",
      "Nâng tải thật sát đất"
    ],
    "answer": "Dừng công việc, hạ tải và thu cần về vị trí an toàn",
    "explain": "Sức gió có thể làm lắc tải mạnh hoặc đẩy đổ cần trục."
  },
  {
    "id": 13,
    "question": "Ai là người có quyền ra tín hiệu cho người vận hành cần trục?",
    "options": [
      "Bất kỳ ai ở công trường",
      "Chỉ người đánh tín hiệu được chỉ định (Rigger)",
      "Bảo vệ công trường",
      "Tài xế xe tải hàng"
    ],
    "answer": "Chỉ người đánh tín hiệu được chỉ định (Rigger)",
    "explain": "Đảm bảo sự thống nhất và hiểu ý nhau giữa người lái và người dưới đất."
  },
  {
    "id": 14,
    "question": "Khi hạ tải xuống xe tải, người lái xe tải nên ở đâu?",
    "options": [
      "Ngồi trong cabin xe tải",
      "Đứng trên thùng xe điều chỉnh hàng",
      "Rời khỏi cabin và đứng ở vị trí an toàn quan sát được",
      "Đứng ngay dưới vật nâng"
    ],
    "answer": "Rời khỏi cabin và đứng ở vị trí an toàn quan sát được",
    "explain": "Tránh tai nạn đè bẹp nếu chẳng may vật nâng bị rơi hoặc va chạm."
  },
  {
    "id": 15,
    "question": "Thế nào là 'Tải trọng tĩnh' khi kiểm định cần trục?",
    "options": [
      "Thử với tải trọng bằng 100% định mức",
      "Thử với tải trọng bằng 125% định mức",
      "Thử với tải trọng bằng 110% định mức",
      "Thử khi không có tải"
    ],
    "answer": "Thử với tải trọng bằng 125% định mức",
    "explain": "Kiểm tra độ bền kết cấu thép và phanh ở trạng thái đứng yên."
  },
  {
    "id": 16,
    "question": "Thế nào là 'Tải trọng động' khi kiểm định cần trục?",
    "options": [
      "Thử với tải trọng 110% định mức khi đang di chuyển",
      "Thử với tải trọng 125% định mức",
      "Thử tốc độ nhanh nhất",
      "Thử nâng vật nhẹ"
    ],
    "answer": "Thử với tải trọng 110% định mức khi đang di chuyển",
    "explain": "Kiểm tra sự làm việc ổn định của các cơ cấu khi vận hành có tải."
  },
  {
    "id": 17,
    "question": "Khi di chuyển cần trục bánh xích trên nền đất yếu, cần chú ý gì?",
    "options": [
      "Chạy thật nhanh",
      "Lót tấm đệm gỗ hoặc thép để phân tán áp lực",
      "Bơm thêm mỡ vào xích",
      "Không cần chú ý vì xích rất khỏe"
    ],
    "answer": "Lót tấm đệm gỗ hoặc thép để phân tán áp lực",
    "explain": "Tránh sụt lún gây nghiêng đổ máy."
  },
  {
    "id": 18,
    "question": "Phanh cơ cấu nâng hạ của cần trục thường là loại nào?",
    "options": [
      "Phanh tay",
      "Phanh thường đóng (luôn tự động đóng khi mất điện/dầu)",
      "Phanh thường mở",
      "Không có phanh"
    ],
    "answer": "Phanh thường đóng (luôn tự động đóng khi mất điện/dầu)",
    "explain": "Đảm bảo an toàn: nếu có sự cố mất năng lượng, phanh sẽ tự khóa để giữ vật."
  },
  {
    "id": 19,
    "question": "Tại sao phải để ít nhất 3 vòng cáp trên tang cuốn khi hạ móc thấp nhất?",
    "options": [
      "Để cáp không bị rối",
      "Tránh lực nhổ trực tiếp vào điểm chốt cáp trên tang",
      "Để hạ được sâu hơn",
      "Để tang cuốn đẹp hơn"
    ],
    "answer": "Tránh lực nhổ trực tiếp vào điểm chốt cáp trên tang",
    "explain": "Ma sát của các vòng cáp còn lại sẽ chịu lực thay cho chốt giữ cáp."
  },
  {
    "id": 20,
    "question": "Khi nâng hai vật nặng cùng lúc bằng một móc cẩu, có được phép không?",
    "options": [
      "Được, nếu tổng trọng lượng không quá tải",
      "Tuyệt đối không, vì dễ gây va chạm và mất ổn định",
      "Được, nếu buộc dây chắc chắn",
      "Được, nếu nâng chậm"
    ],
    "answer": "Tuyệt đối không, vì dễ gây va chạm và mất ổn định",
    "explain": "Mỗi lần nâng chỉ được thao tác với một tải đơn lẻ để kiểm soát an toàn."
  },
  {
    "id": 21,
    "question": "Dấu hiệu nào cho thấy cần trục sắp bị quá tải?",
    "options": [
      "Máy nổ to hơn",
      "Thiết bị báo tải (LMI) báo đèn đỏ/còi kêu",
      "Khói đen ra nhiều",
      "Lốp xe bị xẹp"
    ],
    "answer": "Thiết bị báo tải (LMI) báo đèn đỏ/còi kêu",
    "explain": "Hệ thống điện tử đo mô-men tải trọng sẽ cảnh báo khi chạm ngưỡng nguy hiểm."
  },
  {
    "id": 22,
    "question": "Vai trò của 'Đối trọng' (Counterweight) trên cần trục là gì?",
    "options": [
      "Làm đẹp xe",
      "Cân bằng mô-men lật do tải trọng gây ra",
      "Giúp xe chạy nhanh hơn",
      "Tăng dung tích bình dầu"
    ],
    "answer": "Cân bằng mô-men lật do tải trọng gây ra",
    "explain": "Tạo lực đối kháng ở phía sau để giữ xe không bị chúi về phía trước khi nâng hàng."
  },
  {
    "id": 23,
    "question": "Trước khi làm việc, người lái cần kiểm tra gì ở mỏ móc?",
    "options": [
      "Độ bóng của móc",
      "Chốt an toàn (lưỡi gà) và độ biến dạng của móc",
      "Màu sơn của móc",
      "Trọng lượng của móc"
    ],
    "answer": "Chốt an toàn (lưỡi gà) và độ biến dạng của móc",
    "explain": "Chốt an toàn ngăn dây cáp tuột khỏi móc khi bị lỏng."
  },
  {
    "id": 24,
    "question": "Khi xoay toa (Swing), người lái cần lưu ý điều gì nhất?",
    "options": [
      "Tốc độ gió",
      "Vật cản trong bán kính xoay và người đứng gần đuôi xe",
      "Màu sắc cabin",
      "Tiếng động cơ"
    ],
    "answer": "Vật cản trong bán kính xoay và người đứng gần đuôi xe",
    "explain": "Đuôi xe (đối trọng) thường có bán kính quét lớn, dễ va quẹt người hoặc vật xung quanh."
  },
  {
    "id": 25,
    "question": "Nếu đang nâng tải mà bị mất điện đột ngột (với cần trục điện), phải làm gì?",
    "options": [
      "Nhảy khỏi cabin",
      "Giữ nguyên tay điều khiển, chờ có điện",
      "Chuyển tay điều khiển về vị trí 0, báo động và hạ tải bằng phanh tay (nếu có thể)",
      "Kêu cứu"
    ],
    "answer": "Chuyển tay điều khiển về vị trí 0, báo động và hạ tải bằng phanh tay (nếu có thể)",
    "explain": "Đưa về vị trí trung tính để tránh máy tự chạy khi có điện trở lại."
  },
  {
    "id": 26,
    "question": "Bộ phận 'Puly' (Sheaves) có tác dụng gì?",
    "options": [
      "Làm cáp nhanh mòn",
      "Đổi hướng lực và thay đổi lực căng cáp",
      "Chống nắng cho cáp",
      "Để trang trí"
    ],
    "answer": "Đổi hướng lực và thay đổi lực căng cáp",
    "explain": "Hệ thống puly giúp nhân lực nâng lên nhiều lần (palăng)."
  },
  {
    "id": 27,
    "question": "Khi di chuyển cần trục không tải trên đường, cần để vị trí cần như thế nào?",
    "options": [
      "Nâng cao hết mức",
      "Hạ thấp, thu ngắn và cố định mỏ móc an toàn",
      "Xoay cần sang một bên",
      "Để cần tự do"
    ],
    "answer": "Hạ thấp, thu ngắn và cố định mỏ móc an toàn",
    "explain": "Giảm trọng tâm và tránh va chạm vào dây điện hoặc cổng chào."
  },
  {
    "id": 28,
    "question": "Tuổi tối thiểu để được đào tạo vận hành cần trục là bao nhiêu?",
    "options": [
      "16 tuổi",
      "18 tuổi",
      "20 tuổi",
      "22 tuổi"
    ],
    "answer": "18 tuổi",
    "explain": "Theo quy định pháp luật về lao động làm công việc nặng nhọc độc hại."
  },
  {
    "id": 29,
    "question": "Kiểm định kỹ thuật an toàn định kỳ cho cần trục thường là bao lâu?",
    "options": [
      "1 tháng/lần",
      "6 tháng/lần",
      "1 năm/lần (tùy theo tình trạng và quy định của nhà nước)",
      "5 năm/lần"
    ],
    "answer": "1 năm/lần (tùy theo tình trạng và quy định của nhà nước)",
    "explain": "Đảm bảo thiết bị luôn trong tình trạng kỹ thuật an toàn theo chuẩn quốc gia."
  },
  {
    "id": 30,
    "question": "Khi mỏ móc bị nứt, người vận hành có được hàn lại để dùng không?",
    "options": [
      "Được, nếu thợ hàn giỏi",
      "Tuyệt đối không, phải thay mới",
      "Được, sau đó sơn lại",
      "Được, nếu nứt nhỏ"
    ],
    "answer": "Tuyệt đối không, phải thay mới",
    "explain": "Hàn làm thay đổi cấu trúc tinh thể thép, gây giòn và đứt gãy móc đột ngột."
  },
  {
    "id": 31,
    "question": "Khái niệm 'Bán kính làm việc' (Working Radius) là gì?",
    "options": [
      "Chiều dài của cần",
      "Khoảng cách từ tâm quay của cần trục đến tâm vật nâng",
      "Chiều rộng của xe",
      "Chiều cao nâng hàng"
    ],
    "answer": "Khoảng cách từ tâm quay của cần trục đến tâm vật nâng",
    "explain": "Bán kính càng lớn thì sức nâng của cần trục càng giảm."
  },
  {
    "id": 32,
    "question": "Thao tác 'Ra cần' (Boom Extend) làm thay đổi sức nâng như thế nào?",
    "options": [
      "Tăng sức nâng",
      "Giảm sức nâng do làm tăng cánh tay đòn",
      "Không thay đổi",
      "Làm xe chạy nhanh hơn"
    ],
    "answer": "Giảm sức nâng do làm tăng cánh tay đòn",
    "explain": "Khi vươn cần dài ra, mô-men lật tăng lên, nên chỉ được phép nâng vật nhẹ hơn."
  },
  {
    "id": 33,
    "question": "Dây cáp 'Choker Hitch' (thắt nút thòng lọng) làm giảm sức tải của dây bao nhiêu %?",
    "options": [
      "Không giảm",
      "Giảm khoảng 25%",
      "Giảm 50%",
      "Tăng sức tải"
    ],
    "answer": "Giảm khoảng 25%",
    "explain": "Do cáp bị uốn cong gắt tại điểm thắt làm tổn thương sợi thép."
  },
  {
    "id": 34,
    "question": "Mục đích của việc lót đệm vào các cạnh sắc của vật nâng là gì?",
    "options": [
      "Để vật nâng không bị trầy sơn",
      "Bảo vệ dây cáp/dây cẩu không bị cắt đứt",
      "Làm vật nâng trông đẹp hơn",
      "Để nâng nhanh hơn"
    ],
    "answer": "Bảo vệ dây cáp/dây cẩu không bị cắt đứt",
    "explain": "Cạnh sắc có thể cắt đứt dây cẩu ngay lập tức khi chịu lực căng."
  },
  {
    "id": 35,
    "question": "Khi dùng 2 cần trục cùng nâng 1 vật (Tandem Lift), cần lưu ý gì?",
    "options": [
      "Mỗi máy không nâng quá 75% sức nâng định mức và có người chỉ huy chung",
      "Nâng càng nhanh càng tốt",
      "Dùng máy lớn nâng hết, máy nhỏ chỉ giữ",
      "Không cần lưu ý gì"
    ],
    "answer": "Mỗi máy không nâng quá 75% sức nâng định mức và có người chỉ huy chung",
    "explain": "Để dự phòng rủi ro dồn tải từ máy này sang máy kia khi không đồng bộ."
  },
  {
    "id": 36,
    "question": "Phụ kiện 'Ma ní' (Shackle) dùng để làm gì?",
    "options": [
      "Để nối các đoạn xích hoặc dây cẩu với nhau/với mỏ móc",
      "Để làm đối trọng",
      "Để khóa bánh xe",
      "Để thay thế móc cẩu"
    ],
    "answer": "Để nối các đoạn xích hoặc dây cẩu với nhau/với mỏ móc",
    "explain": "Là phụ kiện liên kết linh hoạt và chắc chắn trong kỹ thuật treo tải."
  },
  {
    "id": 37,
    "question": "Ký hiệu 'WLL' hoặc 'SWL' trên phụ kiện nâng nghĩa là gì?",
    "options": [
      "Tốc độ nâng tối đa",
      "Tải trọng làm việc an toàn (Safe Working Load)",
      "Trọng lượng của chính phụ kiện đó",
      "Năm sản xuất"
    ],
    "answer": "Tải trọng làm việc an toàn (Safe Working Load)",
    "explain": "Là mức tải tối đa mà phụ kiện được phép sử dụng hàng ngày."
  },
  {
    "id": 38,
    "question": "Tại sao phải dùng 'Dây lái' (Tag line) khi nâng vật dài hoặc cồng kềnh?",
    "options": [
      "Để buộc thêm quà vào vật nâng",
      "Để người dưới đất giữ và điều hướng, chống vật bị xoay tự do",
      "Để làm vật nặng thêm",
      "Để thay thế người đánh tín hiệu"
    ],
    "answer": "Để người dưới đất giữ và điều hướng, chống vật bị xoay tự do",
    "explain": "Kiểm soát hướng của tải trọng mà không cần lại gần vị trí nguy hiểm dưới vật nâng."
  },
  {
    "id": 39,
    "question": "Khi làm việc ban đêm, yêu cầu quan trọng nhất là gì?",
    "options": [
      "Phải có nhạc cho đỡ buồn ngủ",
      "Hệ thống chiếu sáng đầy đủ khu vực làm việc và đường di chuyển",
      "Phải lái xe nhanh hơn",
      "Không được bật đèn pha"
    ],
    "answer": "Hệ thống chiếu sáng đầy đủ khu vực làm việc và đường di chuyển",
    "explain": "Đảm bảo tầm nhìn rõ ràng để phát hiện vật cản và tín hiệu."
  },
  {
    "id": 40,
    "question": "Nếu phát hiện chân chống bị lún xuống đất khi đang nâng hàng, người lái phải làm gì?",
    "options": [
      "Kê thêm gỗ vào khi đang có tải",
      "Lập tức hạ tải xuống mặt đất an toàn rồi mới xử lý chân chống",
      "Kêu người đứng lên chân chống cho nặng",
      "Tiếp tục nâng thật nhanh"
    ],
    "answer": "Lập tức hạ tải xuống mặt đất an toàn rồi mới xử lý chân chống",
    "explain": "Hành động hạ tải giúp loại bỏ mô-men lật ngay lập tức trước khi máy bị đổ."
  },
{
    "id": 41,
    "question": "Khi di chuyển cần trục bánh lốp trên đường công cộng, người lái cần có loại giấy tờ gì?",
    "options": [
      "Chỉ cần chứng chỉ vận hành",
      "Giấy phép lái xe hạng tương ứng (C/E) và chứng chỉ vận hành",
      "Thẻ căn cước công dân",
      "Không cần giấy tờ gì"
    ],
    "answer": "Giấy phép lái xe hạng tương ứng (C/E) và chứng chỉ vận hành",
    "explain": "Cần trục bánh lốp khi tham gia giao thông được coi là xe máy chuyên dùng, yêu cầu cả bằng lái xe và chứng chỉ chuyên môn."
  },
  {
    "id": 42,
    "question": "Thiết bị 'Chống quá tải' (LMI) báo động khi nào?",
    "options": [
      "Khi xe chạy nhanh",
      "Khi tải trọng thực tế vượt ngưỡng an toàn cho phép ở bán kính đó",
      "Khi xe sắp hết dầu",
      "Khi trời mưa"
    ],
    "answer": "Khi tải trọng thực tế vượt ngưỡng an toàn cho phép ở bán kính đó",
    "explain": "LMI tính toán mô-men tải dựa trên góc cần, chiều dài cần và trọng lượng hàng."
  },
  {
    "id": 43,
    "question": "Bộ phận nào giúp cần trục có thể quay 360 độ liên tục?",
    "options": [
      "Bánh xích",
      "Cơ cấu quay toa và khớp quay trung tâm (Swivel joint)",
      "Cần ống lồng",
      "Chân chống"
    ],
    "answer": "Cơ cấu quay toa và khớp quay trung tâm (Swivel joint)",
    "explain": "Khớp quay trung tâm cho phép dầu thủy lực truyền từ phần di chuyển lên phần quay mà không bị xoắn ống."
  },
  {
    "id": 44,
    "question": "Tại sao phải kiểm tra áp suất lốp trước khi vận hành cần trục bánh lốp?",
    "options": [
      "Để xe chạy êm hơn",
      "Đảm bảo độ ổn định và tránh nổ lốp khi đang nâng tải",
      "Để lốp không bị mòn",
      "Để tiết kiệm nhiên liệu"
    ],
    "answer": "Đảm bảo độ ổn định và tránh nổ lốp khi đang nâng tải",
    "explain": "Lốp xe đóng vai trò chịu lực tỳ rất lớn khi máy làm việc ở chế độ không hạ chân chống."
  },
  {
    "id": 45,
    "question": "Khi nâng tải, nếu thấy một chân chống bị nhấc hổng lên khỏi mặt đất, điều đó nghĩa là gì?",
    "options": [
      "Xe đang rất khỏe",
      "Máy đang mất ổn định và có nguy cơ lật",
      "Lò xo chân chống bị hỏng",
      "Đất ở đó quá cứng"
    ],
    "answer": "Máy đang mất ổn định và có nguy cơ lật",
    "explain": "Trọng tâm tổng thể đã di chuyển sát ra mép chân đế, cần hạ tải ngay lập tức."
  },
  {
    "id": 46,
    "question": "Để tăng chiều cao nâng và bán kính làm việc, người ta lắp thêm bộ phận gì?",
    "options": [
      "Lắp thêm đối trọng",
      "Lắp cần phụ (Jib)",
      "Thay cáp dài hơn",
      "Bơm thêm dầu"
    ],
    "answer": "Lắp cần phụ (Jib)",
    "explain": "Cần phụ giúp với tới những vị trí cao hơn hoặc xa hơn mà cần chính không tới được."
  },
  {
    "id": 47,
    "question": "Kỹ thuật 'Am hiểu bảng tải' (Load Chart) giúp ích gì cho người lái?",
    "options": [
      "Biết được giá tiền của máy",
      "Xác định được tải trọng tối đa cho phép ở mọi cấu hình",
      "Biết được đường đi của máy",
      "Biết cách sửa động cơ"
    ],
    "answer": "Xác định được tải trọng tối đa cho phép ở mọi cấu hình",
    "explain": "Mỗi góc nâng và chiều dài cần có một giới hạn tải riêng, bảng tải là tài liệu bắt buộc phải tuân theo."
  },
  {
    "id": 48,
    "question": "Tại sao không nên thao tác 'Quay toa' quá nhanh khi đang có tải?",
    "options": [
      "Làm người lái bị chóng mặt",
      "Gây ra lực quán tính làm vật nâng văng ra xa gây lật máy",
      "Tốn dầu thủy lực",
      "Làm hỏng vòng bi quay toa"
    ],
    "answer": "Gây ra lực quán tính làm vật nâng văng ra xa gây lật máy",
    "explain": "Lực ly tâm đẩy vật ra ngoài làm tăng bán kính làm việc đột ngột, dẫn đến quá tải mô-men."
  },
  {
    "id": 49,
    "question": "Khi dùng dây xích để cẩu hàng, cần loại bỏ xích nếu mắt xích bị mòn quá bao nhiêu %?",
    "options": [
      "1%",
      "10%",
      "30%",
      "50%"
    ],
    "answer": "10%",
    "explain": "Độ mòn quá 10% đường kính mắt xích làm giảm đáng kể khả năng chịu lực an toàn."
  },
  {
    "id": 50,
    "question": "Trước khi khởi động động cơ, cần gạt điều khiển phải ở vị trí nào?",
    "options": [
      "Vị trí bất kỳ",
      "Vị trí trung hòa (Neutral)",
      "Vị trí nâng",
      "Vị trí hạ"
    ],
    "answer": "Vị trí trung hòa (Neutral)",
    "explain": "Đảm bảo các cơ cấu không tự động chuyển động gây nguy hiểm khi vừa nổ máy."
  },
  {
    "id": 51,
    "question": "Bộ phận 'Gương cầu lồi' trên cabin có tác dụng gì?",
    "options": [
      "Để người lái soi gương",
      "Mở rộng tầm quan sát phía sau và các điểm mù",
      "Chống chói nắng",
      "Để trang trí"
    ],
    "answer": "Mở rộng tầm quan sát phía sau và các điểm mù",
    "explain": "Giúp người vận hành quan sát được người hoặc vật cản ở khu vực đuôi xe khi quay toa."
  },
  {
    "id": 52,
    "question": "Thế nào là 'Tầm với tối thiểu'?",
    "options": [
      "Khi cần vươn dài nhất",
      "Khi cần ở góc nâng lớn nhất (dựng đứng nhất)",
      "Khi hạ cần sát đất",
      "Khi không có cần"
    ],
    "answer": "Khi cần ở góc nâng lớn nhất (dựng đứng nhất)",
    "explain": "Ở góc này, khoảng cách từ tâm quay đến tâm tải là ngắn nhất, sức nâng là lớn nhất."
  },
  {
    "id": 53,
    "question": "Tại sao phải dùng gối kê (Pad) dưới chân chân chống?",
    "options": [
      "Để chân chống không bị bẩn",
      "Tăng diện tích tiếp xúc và giảm áp suất lên mặt đất",
      "Làm xe đứng cao hơn",
      "Giảm tiếng ồn"
    ],
    "answer": "Tăng diện tích tiếp xúc và giảm áp suất lên mặt đất",
    "explain": "Ngăn chặn chân chống đâm xuyên qua nền đất hoặc nhựa đường gây nghiêng máy."
  },
  {
    "id": 54,
    "question": "Tín hiệu tay: Cánh tay giang ngang, lòng bàn tay hướng xuống và đưa qua lại nghĩa là gì?",
    "options": [
      "Nâng tải",
      "Dừng lại (Stop)",
      "Hạ tải",
      "Di chuyển chậm"
    ],
    "answer": "Dừng lại (Stop)",
    "explain": "Đây là tín hiệu chuẩn quốc tế yêu cầu dừng mọi chuyển động ngay lập tức."
  },
  {
    "id": 55,
    "question": "Khi làm việc gần hố móng sâu, khoảng cách an toàn tối thiểu tính từ chân chống đến mép hố thường là?",
    "options": [
      "Bằng 0.5 lần chiều sâu hố",
      "Ít nhất bằng chiều sâu hố (tỉ lệ 1:1)",
      "Càng gần càng tốt",
      "10 mét"
    ],
    "answer": "Ít nhất bằng chiều sâu hố (tỉ lệ 1:1)",
    "explain": "Tránh sạt lở mép hố do áp lực từ trọng lượng máy và tải trọng."
  },
  {
    "id": 56,
    "question": "Cấu tạo của cần trục bánh xích khác bánh lốp ở điểm cơ bản nào?",
    "options": [
      "Không có cabin",
      "Không cần chân chống vì diện tích tiếp xúc xích lớn",
      "Không có động cơ",
      "Lái bằng vô lăng"
    ],
    "answer": "Không cần chân chống vì diện tích tiếp xúc xích lớn",
    "explain": "Trọng lượng bản thân lớn và diện tích xích rộng giúp máy tự ổn định khi nâng hạ."
  },
  {
    "id": 57,
    "question": "Bộ phận 'Tang quấn cáp' (Drum) có rãnh để làm gì?",
    "options": [
      "Để trang trí",
      "Để cáp được xếp đều, không bị chồng chéo làm dập cáp",
      "Để cáp chạy nhanh hơn",
      "Để giảm trọng lượng tang"
    ],
    "answer": "Để cáp được xếp đều, không bị chồng chéo làm dập cáp",
    "explain": "Xếp cáp đúng rãnh giúp tăng tuổi thọ cáp và vận hành êm ái hơn."
  },
  {
    "id": 58,
    "question": "Khi thay dầu thủy lực, cần lưu ý điều gì?",
    "options": [
      "Dùng dầu cũ cho tiết kiệm",
      "Đúng chủng loại và độ sạch tuyệt đối",
      "Đổ càng đầy càng tốt",
      "Thay khi dầu đang sôi"
    ],
    "answer": "Đúng chủng loại và độ sạch tuyệt đối",
    "explain": "Hệ thống thủy lực cần trục rất nhạy cảm với bụi bẩn; tạp chất có thể làm hỏng bơm và van."
  },
  {
    "id": 59,
    "question": "Tại sao phải hạ tải từ từ khi đặt vật xuống đất?",
    "options": [
      "Để tiết kiệm thời gian",
      "Tránh lực va đập đột ngột gây hỏng vật nâng và giãn cáp",
      "Để không gây tiếng động",
      "Để người móc cáp đứng gần hơn"
    ],
    "answer": "Tránh lực va đập đột ngột gây hỏng vật nâng và giãn cáp",
    "explain": "Hạ tải êm giúp bảo vệ kết cấu cơ khí của cả máy và hàng hóa."
  },
  {
    "id": 60,
    "question": "Người vận hành cần làm gì khi thấy sương mù dày đặc che khuất tầm nhìn?",
    "options": [
      "Cố gắng làm theo cảm giác",
      "Bật hết đèn và làm tiếp",
      "Tạm dừng công việc cho đến khi tầm nhìn đảm bảo",
      "Nhờ người khác đứng chỉ đạo"
    ],
    "answer": "Tạm dừng công việc cho đến khi tầm nhìn đảm bảo",
    "explain": "Không thấy rõ vật nâng và tín hiệu Rigger là vi phạm an toàn nghiêm trọng."
  },
  {
    "id": 61,
    "question": "Trong hệ thống palăng, càng nhiều nhánh cáp thì?",
    "options": [
      "Tốc độ nâng càng nhanh",
      "Sức nâng càng lớn nhưng tốc độ nâng chậm đi",
      "Máy càng tốn ít dầu",
      "Cáp càng dễ đứt"
    ],
    "answer": "Sức nâng càng lớn nhưng tốc độ nâng chậm đi",
    "explain": "Đây là nguyên lý đòn bẩy: lợi về lực thì thiệt về đường đi (tốc độ)."
  },
  {
    "id": 62,
    "question": "Dấu hiệu 'Đứt mỏi' của cáp thép thường xuất hiện ở đâu?",
    "options": [
      "Ở trong lõi cáp",
      "Trên bề mặt các sợi thép nằm ở mặt ngoài",
      "Ở chốt giữ cáp",
      "Ở mỏ móc"
    ],
    "answer": "Trên bề mặt các sợi thép nằm ở mặt ngoài",
    "explain": "Do ma sát và uốn cong liên tục qua puly dẫn đến các sợi thép bị gãy."
  },
  {
    "id": 63,
    "question": "Tại sao phải khóa chốt quay toa khi di chuyển xe trên đường?",
    "options": [
      "Để xe không bị rung",
      "Ngăn cần bị xoay tự do gây tai nạn cho phương tiện khác",
      "Để bảo vệ hộp số",
      "Để xe chạy thẳng"
    ],
    "answer": "Ngăn cần bị xoay tự do gây tai nạn cho phương tiện khác",
    "explain": "Lực quán tính khi vào cua có thể làm phần trên quay tự do nếu không được chốt cứng."
  },
  {
    "id": 64,
    "question": "Khi nâng vật nặng, tâm mỏ móc phải nằm ở đâu so với trọng tâm vật?",
    "options": [
      "Nằm lệch sang trái",
      "Thẳng đứng ngay trên trọng tâm vật",
      "Nằm ở mép vật",
      "Càng xa trọng tâm càng tốt"
    ],
    "answer": "Thẳng đứng ngay trên trọng tâm vật",
    "explain": "Đảm bảo vật không bị lật hoặc văng khi rời khỏi mặt đất."
  },
  {
    "id": 65,
    "question": "Thiết bị 'Cân bằng áp suất' trong xi lanh nâng cần có tác dụng gì?",
    "options": [
      "Giúp cần hạ nhanh hơn",
      "Giữ cần không bị rơi tự do khi bị vỡ ống dầu (Van chống rơi)",
      "Làm dầu mát hơn",
      "Tăng áp lực bơm"
    ],
    "answer": "Giữ cần không bị rơi tự do khi bị vỡ ống dầu (Van chống rơi)",
    "explain": "Đây là van an toàn quan trọng giữ cần ở nguyên vị trí nếu hệ thống thủy lực mất áp suất."
  },
  {
    "id": 66,
    "question": "Thế nào là 'Nâng quá tải'?",
    "options": [
      "Nâng vật nặng hơn 100kg",
      "Nâng vật có trọng lượng vượt quá giá trị ghi trong bảng tải ở cấu hình hiện tại",
      "Nâng vật cao hơn 10 mét",
      "Nâng vật đi quá xa"
    ],
    "answer": "Nâng vật có trọng lượng vượt quá giá trị ghi trong bảng tải ở cấu hình hiện tại",
    "explain": "Quá tải có thể gây gãy cần hoặc lật máy ngay cả khi vật đó chưa nặng bằng sức nâng tối đa của máy."
  },
  {
    "id": 67,
    "question": "Đối với cần trục có nhiều tang quấn cáp, người lái cần chú ý gì?",
    "options": [
      "Không cho các dây cáp xoắn vào nhau",
      "Chỉ dùng một tang duy nhất",
      "Tháo bớt cáp ra",
      "Bơm nhiều mỡ vào cáp"
    ],
    "answer": "Không cho các dây cáp xoắn vào nhau",
    "explain": "Đảm bảo cáp nâng chính và cáp nâng phụ không bị chồng chéo gây kẹt hoặc đứt."
  },
  {
    "id": 68,
    "question": "Khi kiểm tra phanh, nếu thấy phanh bị 'trôi' (tải tự hạ chậm), nguyên nhân thường là?",
    "options": [
      "Do hàng quá nhẹ",
      "Do má phanh bị mòn hoặc lọt dầu vào bề mặt phanh",
      "Do động cơ yếu",
      "Do thời tiết lạnh"
    ],
    "answer": "Do má phanh bị mòn hoặc lọt dầu vào bề mặt phanh",
    "explain": "Dầu làm giảm ma sát, khiến phanh không giữ chặt được tang quấn."
  },
  {
    "id": 69,
    "question": "Thao tác 'Nâng cần' (Boom Up) ảnh hưởng thế nào đến bán kính làm việc?",
    "options": [
      "Làm tăng bán kính",
      "Làm giảm bán kính",
      "Không thay đổi bán kính",
      "Làm máy cao thêm"
    ],
    "answer": "Làm giảm bán kính",
    "explain": "Khi dựng cần đứng hơn, tâm mỏ móc sẽ gần tâm quay của máy hơn."
  },
  {
    "id": 70,
    "question": "Khi nào cần sử dụng phụ kiện 'Cáp vải' (Webbing Sling) thay cho cáp thép?",
    "options": [
      "Khi nâng vật rất nặng",
      "Khi cần bảo vệ bề mặt vật nâng không bị trầy xước",
      "Khi làm việc trong môi trường nhiệt độ cực cao",
      "Khi không có cáp thép"
    ],
    "answer": "Khi cần bảo vệ bề mặt vật nâng không bị trầy xước",
    "explain": "Cáp vải mềm dẻo, tiếp xúc êm, phù hợp cho các thiết bị sơn phủ hoặc tinh xảo."
  },
  {
    "id": 71,
    "question": "Điều gì xảy ra nếu ra hết chân chống nhưng không kê kích phẳng xe?",
    "options": [
      "Máy sẽ làm việc tốt hơn",
      "Lực dồn không đều gây nứt khung gầm và tăng nguy cơ lật",
      "Tốn thêm diện tích",
      "Không ảnh hưởng gì"
    ],
    "answer": "Lực dồn không đều gây nứt khung gầm và tăng nguy cơ lật",
    "explain": "Độ nghiêng của máy làm sai lệch các thông số trong bảng tải và gây ứng suất vặn cho kết cấu thép."
  },
  {
    "id": 72,
    "question": "Việc bảo dưỡng định kỳ hệ thống bôi trơn puly đầu cần có tác dụng gì?",
    "options": [
      "Để cáp không bị đen",
      "Giảm ma sát, giúp cáp chuyển động trơn tru và giảm mài mòn rãnh puly",
      "Để máy đẹp hơn",
      "Để giảm cân nặng cho cần"
    ],
    "answer": "Giảm ma sát, giúp cáp chuyển động trơn tru và giảm mài mòn rãnh puly",
    "explain": "Puly bị kẹt sẽ làm cáp bị mài mòn cực nhanh và gây tải trọng phụ lên cần."
  },
  {
    "id": 73,
    "question": "Khi lái xe cần trục bánh lốp xuống dốc dài, thao tác nào là an toàn?",
    "options": [
      "Về số 0 (mo) để chạy nhanh",
      "Sử dụng số thấp kết hợp phanh động cơ và phanh khí xả",
      "Tắt máy để tiết kiệm dầu",
      "Chỉ dùng phanh chân"
    ],
    "answer": "Sử dụng số thấp kết hợp phanh động cơ và phanh khí xả",
    "explain": "Tránh hiện tượng cháy phanh và mất kiểm soát tốc độ khi xuống dốc."
  },
  {
    "id": 74,
    "question": "Trường hợp nào được phép nâng người bằng cần trục?",
    "options": [
      "Khi cần làm nhanh việc trên cao",
      "Khi dùng giỏ nâng chuyên dụng (Man-basket) được cấp phép và tuân thủ quy trình nghiêm ngặt",
      "Khi người đó bám chặt vào mỏ móc",
      "Không bao giờ được phép"
    ],
    "answer": "Khi dùng giỏ nâng chuyên dụng (Man-basket) được cấp phép và tuân thủ quy trình nghiêm ngặt",
    "explain": "Chỉ được nâng người trong trường hợp bất khả kháng và thiết bị nâng phải có hệ số an toàn rất cao."
  },
  {
    "id": 75,
    "question": "Mục đích của việc kiểm tra mức nước làm mát động cơ hàng ngày là gì?",
    "options": [
      "Để nước không bị thối",
      "Ngăn ngừa động cơ bị quá nhiệt dẫn đến bó máy",
      "Để cabin mát hơn",
      "Để tiết kiệm nước"
    ],
    "answer": "Ngăn ngừa động cơ bị quá nhiệt dẫn đến bó máy",
    "explain": "Động cơ máy cẩu làm việc ở cường độ cao, hệ thống làm mát cực kỳ quan trọng."
  },
  {
    "id": 76,
    "question": "Khi thao tác 'Thu cần' (Boom Retract), sức nâng của máy thay đổi thế nào?",
    "options": [
      "Giảm đi",
      "Tăng lên",
      "Giữ nguyên",
      "Làm xe đi chậm lại"
    ],
    "answer": "Tăng lên",
    "explain": "Thu cần làm giảm cánh tay đòn, tăng độ cứng vững và khả năng chịu tải của cần."
  },
  {
    "id": 77,
    "question": "Phụ kiện 'Dây xích 4 chân' thường dùng để nâng loại hàng nào?",
    "options": [
      "Vật dài như thanh thép",
      "Vật có hình khối vuông hoặc tròn có 4 điểm móc",
      "Vật bằng kính",
      "Vật có trọng lượng cực nhẹ"
    ],
    "answer": "Vật có hình khối vuông hoặc tròn có 4 điểm móc",
    "explain": "Tạo sự cân bằng tuyệt đối và phân bổ lực đều cho vật nâng."
  },
  {
    "id": 78,
    "question": "Người vận hành phải làm gì nếu còi báo quá tải kêu liên tục?",
    "options": [
      "Tắt còi đi cho đỡ ồn",
      "Ngay lập tức thực hiện thao tác giảm bán kính hoặc hạ tải",
      "Tiếp tục nâng vì còi hay bị hỏng",
      "Nhờ người đẩy vật nâng vào trong"
    ],
    "answer": "Ngay lập tức thực hiện thao tác giảm bán kính hoặc hạ tải",
    "explain": "Còi báo là ranh giới cuối cùng giữa an toàn và tai nạn lật máy."
  },
  {
    "id": 79,
    "question": "Khi đỗ cần trục trong công trường qua đêm, mỏ móc nên để thế nào?",
    "options": [
      "Để treo lơ lửng",
      "Hạ sát đất hoặc cố định vào vị trí khóa an toàn",
      "Để lên mái nhà",
      "Tháo mỏ móc ra mang về"
    ],
    "answer": "Hạ sát đất hoặc cố định vào vị trí khóa an toàn",
    "explain": "Tránh gió làm đung đưa mỏ móc gây va chạm hoặc trẻ em nghịch ngợm."
  },
  {
    "id": 80,
    "question": "Chứng chỉ vận hành cần trục có thời hạn bao lâu?",
    "options": [
      "Có giá trị vĩnh viễn",
      "5 năm (tùy quy định đào tạo và cấp bằng hiện hành)",
      "1 năm",
      "6 tháng"
    ],
    "answer": "5 năm (tùy quy định đào tạo và cấp bằng hiện hành)",
    "explain": "Người lao động cần được đào tạo lại hoặc gia hạn để cập nhật kiến thức an toàn mới."
  },
  {
    "id": 81,
    "question": "Khi làm việc trên nền đất mới san lấp, người vận hành cần lưu ý gì?",
    "options": [
      "Không cần lưu ý vì xe xích rất nặng",
      "Phải kiểm tra độ lún và sử dụng tấm lót chân chống diện tích lớn",
      "Chỉ cần ra chân chống hết mức",
      "Cho xe chạy nhanh qua vùng đó"
    ],
    "answer": "Phải kiểm tra độ lún và sử dụng tấm lót chân chống diện tích lớn",
    "explain": "Nền đất mới san lấp thường chưa ổn định, dễ gây lún cục bộ dẫn đến lật máy khi có tải."
  },
  {
    "id": 82,
    "question": "Bộ phận 'Chống chập cần' (Boom Backstop) có tác dụng gì?",
    "options": [
      "Giúp nâng cần nhanh hơn",
      "Ngăn không cho cần ngả quá mức về phía sau gây đổ ngược",
      "Để treo thêm đèn chiếu sáng",
      "Làm cần cứng hơn"
    ],
    "answer": "Ngăn không cho cần ngả quá mức về phía sau gây đổ ngược",
    "explain": "Thiết bị này cực kỳ quan trọng đối với cần trục bánh xích khi làm việc ở góc nâng lớn."
  },
  {
    "id": 83,
    "question": "Khi sử dụng dây cẩu bằng xích, nếu phát hiện mắt xích bị giãn dài ra thì phải làm gì?",
    "options": [
      "Tiếp tục dùng nếu chưa đứt",
      "Loại bỏ ngay lập tức và thay xích mới",
      "Gõ cho nó ngắn lại",
      "Chỉ dùng để nâng hàng nhẹ"
    ],
    "answer": "Loại bỏ ngay lập tức và thay xích mới",
    "explain": "Mắt xích bị biến dạng dài là dấu hiệu thép đã bị quá giới hạn đàn hồi, rất dễ đứt đột ngột."
  },
  {
    "id": 84,
    "question": "Trước khi nâng một khối bê tông đúc sẵn, người lái cần xác định điều gì?",
    "options": [
      "Ngày sản xuất khối bê tông",
      "Vị trí các điểm móc (lifting lugs) và trọng lượng khối bê tông",
      "Màu sơn của khối bê tông",
      "Tên của người thợ đúc"
    ],
    "answer": "Vị trí các điểm móc (lifting lugs) và trọng lượng khối bê tông",
    "explain": "Đảm bảo điểm nâng đủ bền và vật nâng được cân bằng khi nhấc lên."
  },
  {
    "id": 85,
    "question": "Thao tác 'Di chuyển có tải' (Pick and Carry) yêu cầu điều kiện gì?",
    "options": [
      "Chạy tốc độ cao nhất",
      "Tải trọng nằm trong phạm vi cho phép của bảng tải 'Pick and Carry' và đường đi bằng phẳng",
      "Không cần khóa quay toa",
      "Nâng tải thật cao để dễ nhìn đường"
    ],
    "answer": "Tải trọng nằm trong phạm vi cho phép của bảng tải 'Pick and Carry' và đường đi bằng phẳng",
    "explain": "Chế độ này rất nguy hiểm, đòi hỏi sự ổn định cực cao và tốc độ di chuyển rất chậm."
  },
  {
    "id": 86,
    "question": "Khi thấy đồng hồ báo áp suất dầu thủy lực tăng cao bất thường, người lái nên?",
    "options": [
      "Tiếp tục làm việc",
      "Dừng máy, kiểm tra hệ thống van và đường ống",
      "Xả bớt dầu ra ngoài đất",
      "Lấy búa gõ vào đồng hồ"
    ],
    "answer": "Dừng máy, kiểm tra hệ thống van và đường ống",
    "explain": "Áp suất quá cao có thể gây nổ ống dầu hoặc hỏng bơm thủy lực."
  },
  {
    "id": 87,
    "question": "Kỹ thuật 'Tín hiệu bằng còi': 1 tiếng còi dài thường có nghĩa là?",
    "options": [
      "Cho xe lùi",
      "Bắt đầu vận hành hoặc cảnh báo chú ý",
      "Dừng xe",
      "Hết giờ làm việc"
    ],
    "answer": "Bắt đầu vận hành hoặc cảnh báo chú ý",
    "explain": "Dùng để báo hiệu cho những người xung quanh biết máy bắt đầu chuyển động."
  },
  {
    "id": 88,
    "question": "Tại sao phải vệ sinh sạch bùn đất bám vào chân chống và xích xe?",
    "options": [
      "Để xe trông đẹp hơn",
      "Tránh ăn mòn và giúp dễ dàng kiểm tra các vết nứt kết cấu",
      "Để xe chạy nhanh hơn",
      "Để giảm trọng lượng xe"
    ],
    "answer": "Tránh ăn mòn và giúp dễ dàng kiểm tra các vết nứt kết cấu",
    "explain": "Bùn đất có thể che khuất các vết nứt nguy hiểm trên kim loại."
  },
  {
    "id": 89,
    "question": "Khi nâng hàng trong nhà xưởng hẹp, bộ phận nào của cần trục dễ va chạm nhất?",
    "options": [
      "Bánh xe",
      "Đỉnh cần và phía sau đối trọng khi quay toa",
      "Cabin lái",
      "Bình xăng"
    ],
    "answer": "Đỉnh cần và phía sau đối trọng khi quay toa",
    "explain": "Người lái thường tập trung nhìn tải mà quên mất không gian phía sau và phía trên đầu cần."
  },
  {
    "id": 90,
    "question": "Trong cabin cần trục, tại sao không được để các vật dụng rời (chai nước, dụng cụ)?",
    "options": [
      "Làm cabin bị bẩn",
      "Tránh việc chúng rơi vào khe hở bàn đạp hoặc cần điều khiển gây kẹt",
      "Để tiết kiệm diện tích",
      "Vì quy định thẩm mỹ"
    ],
    "answer": "Tránh việc chúng rơi vào khe hở bàn đạp hoặc cần điều khiển gây kẹt",
    "explain": "Một chai nước kẹt dưới bàn đạp phanh có thể gây ra tai nạn thảm khốc."
  },
  {
    "id": 91,
    "question": "Thiết bị bảo vệ người lái (FOPS) có tác dụng gì?",
    "options": [
      "Chống ồn",
      "Bảo vệ người lái khỏi vật rơi từ trên cao xuống cabin",
      "Giúp cabin mát hơn",
      "Chống rung"
    ],
    "answer": "Bảo vệ người lái khỏi vật rơi từ trên cao xuống cabin",
    "explain": "FOPS (Falling Object Protective Structure) là mái che gia cường để bảo vệ an toàn cho người vận hành."
  },
  {
    "id": 92,
    "question": "Khi di chuyển tải đi qua khu vực có máy móc đắt tiền, người vận hành cần chú ý gì?",
    "options": [
      "Nâng thật cao để không chạm vào",
      "Di chuyển cực chậm và có người cảnh giới ở dưới",
      "Yêu cầu thợ máy tắt máy",
      "Che bạt lên máy móc"
    ],
    "answer": "Di chuyển cực chậm và có người cảnh giới ở dưới",
    "explain": "Đảm bảo không có bất kỳ rủi ro va chạm nào xảy ra trong khu vực nhạy cảm."
  },
  {
    "id": 93,
    "question": "Một người công nhân chưa có chứng chỉ vận hành cần trục có được phép điều khiển máy không?",
    "options": [
      "Được, nếu có người giỏi đứng cạnh",
      "Tuyệt đối không, trừ trường hợp đang trong khóa đào tạo có giáo viên kèm",
      "Được, nếu chỉ nâng hàng nhẹ",
      "Được, nếu là chủ doanh nghiệp"
    ],
    "answer": "Tuyệt đối không, trừ trường hợp đang trong khóa đào tạo có giáo viên kèm",
    "explain": "Vận hành thiết bị nâng là công việc yêu cầu nghiêm ngặt về chứng chỉ chuyên môn."
  },
  {
    "id": 94,
    "question": "Tại sao phải kiểm tra phanh nâng hạ khi bắt đầu ca làm việc?",
    "options": [
      "Để kiểm tra xem phanh có kêu không",
      "Để đảm bảo phanh giữ được tải trọng, ngăn ngừa trôi tải tự do",
      "Để làm nóng động cơ",
      "Để kiểm tra điện áp"
    ],
    "answer": "Để đảm bảo phanh giữ được tải trọng, ngăn ngừa trôi tải tự do",
    "explain": "Phanh là chốt chặn an toàn cuối cùng giữ vật ở trên không."
  },
  {
    "id": 95,
    "question": "Khi kết thúc công việc, móc cẩu nên được đặt ở đâu?",
    "options": [
      "Để sát mặt đất",
      "Nâng lên cao (cách sàn trên 2m) và đưa về vị trí đỗ quy định",
      "Để ở giữa nhà xưởng",
      "Treo vật nặng vào để giữ cáp căng"
    ],
    "answer": "Nâng lên cao (cách sàn trên 2m) và đưa về vị trí đỗ quy định",
    "explain": "Tránh gây cản trở cho người và phương tiện di chuyển dưới mặt đất khi máy nghỉ."
  },
  {
    "id": 96,
    "question": "Mục tiêu cao nhất của việc học vận hành cần trục và kỹ thuật treo tải là gì?",
    "options": [
      "Để được tăng lương",
      "Đảm bảo an toàn tuyệt đối cho người, thiết bị và hàng hóa",
      "Để lái xe nhanh hơn",
      "Để biết cách sửa máy"
    ],
    "answer": "Đảm bảo an toàn tuyệt đối cho người, thiết bị và hàng hóa",
    "explain": "An toàn là yếu tố tiên quyết trong mọi hoạt động nâng hạ công nghiệp."
  },
  {
    "id": 97,
    "question": "Cấu trúc bảo vệ người lái khi xe lật (ROPS) có tác dụng gì?",
    "options": [
      "Làm xe đẹp hơn",
      "Đảm bảo không gian sống sót cho người lái nếu xe bị lật",
      "Giúp xe chạy nhanh hơn",
      "Chống nắng mưa"
    ],
    "answer": "Đảm bảo không gian sống sót cho người lái nếu xe bị lật",
    "explain": "Khung thép cường độ cao bảo vệ cabin không bị bẹp rúm khi va chạm."
  },
  {
    "id": 98,
    "question": "Tại sao phải kiểm tra độ mòn của má phanh định kỳ?",
    "options": [
      "Để phanh không kêu",
      "Đảm bảo phanh có đủ lực giữ hàng, không bị trôi hàng",
      "Để thay phanh mới cho đẹp",
      "Không cần kiểm tra"
    ],
    "answer": "Đảm bảo phanh có đủ lực giữ hàng, không bị trôi hàng",
    "explain": "Má phanh mòn quá mức làm mất tác dụng hãm, cực kỳ nguy hiểm."
  },
  {
    "id": 99,
    "question": "Khi nâng hàng gần vách tường, cần lưu ý điều gì?",
    "options": [
      "Vách tường có sơn không",
      "Khoảng cách giữa đuôi xe (đối trọng) và vách tường để tránh kẹp người",
      "Không cần lưu ý",
      "Nâng thật sát tường"
    ],
    "answer": "Khoảng cách giữa đuôi xe (đối trọng) và vách tường để tránh kẹp người",
    "explain": "Tránh tai nạn người bị kẹt giữa đuôi xe và vật cứng khi xe quay toa."
  },
  {
    "id": 100,
    "question": "Tại sao người vận hành cần phải có sức khỏe tốt, đặc biệt là mắt?",
    "options": [
      "Để nhìn cho đẹp",
      "Để lái xe nhanh",
      "Để quan sát rõ tín hiệu, khoảng cách và các chướng ngại vật",
      "Không cần sức khỏe"
    ],
    "answer": "Để quan sát rõ tín hiệu, khoảng cách và các chướng ngại vật",
    "explain": "Vận hành thiết bị nặng đòi hỏi sự tập trung và thị lực chính xác."
  },
  {
    "id": 101,
    "question": "Trách nhiệm cuối cùng về sự an toàn của chuyến nâng thuộc về ai?",
    "options": [
      "Người đánh tín hiệu",
      "Chủ hàng",
      "Người vận hành cần trục (Crane Operator)",
      "Người xem"
    ],
    "answer": "Người vận hành cần trục (Crane Operator)",
    "explain": "Người vận hành là người trực tiếp điều khiển và có quyền từ chối nâng nếu thấy mất an toàn."
  }
];
];

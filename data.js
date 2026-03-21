const questionBank = [
  {
    "id": 1,
    "question": "Theo định nghĩa, thiết bị nào sau đây được gọi là 'Cầu trục'?",
    "options": [
      "Thiết bị nâng bằng sức người để di chuyển vật nặng.",
      "Thiết bị cơ khí thiết kế để nâng tải và mang tải đi ngang.",
      "Thiết bị chỉ có khả năng nâng hạ tại chỗ.",
      "Bất kỳ phương tiện nào có bánh xe tự hành trên đường."
    ],
    "answer": "Thiết bị cơ khí thiết kế để nâng tải và mang tải đi ngang.",
    "explain": "Cầu trục dùng động lực để nâng hạ và có khả năng di chuyển vật theo phương ngang."
  },
  {
    "id": 2,
    "question": "Chuyển động 'Di chuyển ngang' (Traversing) là gì?",
    "options": [
      "Chuyển động của dầm cầu chạy dọc nhà xưởng.",
      "Chuyển động nâng vật lên cao.",
      "Chuyển động của xe tời (Palăng) dọc theo dầm chính.",
      "Chuyển động quay quanh một cột cố định."
    ],
    "answer": "Chuyển động của xe tời (Palăng) dọc theo dầm chính.",
    "explain": "Đây là chuyển động của bộ phận mang tải chạy qua lại trên dầm ngang của cầu trục."
  },
  {
    "id": 3,
    "question": "'Tải trọng định mức' (Rated Load) được hiểu là:",
    "options": [
      "Tổng trọng lượng tối đa cấu trúc chịu được.",
      "Trọng lượng tịnh tối đa treo trên móc sau khi trừ phụ kiện.",
      "Tốc độ tối đa khi cầu trục mang tải.",
      "Khoảng cách ngang giữa hai tâm ray di chuyển."
    ],
    "answer": "Trọng lượng tịnh tối đa treo trên móc sau khi trừ phụ kiện.",
    "explain": "Tải trọng định mức là trọng lượng vật thực tế được phép nâng sau khi trừ đi các thiết bị treo buộc."
  },
  {
    "id": 4,
    "question": "Khi 'Nhấc vật khỏi mặt đất', thao tác nào là đúng kỹ thuật?",
    "options": [
      "Nâng thật nhanh để tránh rung lắc.",
      "Dừng lại khi tải vừa rời giá đỡ để kiểm tra ổn định.",
      "Tiếp tục nâng lên cao mà không cần dừng.",
      "Kéo vật sang một bên để kiểm tra độ căng cáp."
    ],
    "answer": "Dừng lại khi tải vừa rời giá đỡ để kiểm tra ổn định.",
    "explain": "Thử tải tĩnh ở độ cao thấp (10-20cm) giúp đảm bảo phanh và các dây buộc đều an toàn."
  },
  {
    "id": 5,
    "question": "Thiết bị 'Công tắc hành trình' (Limit Switch) có tác dụng gì?",
    "options": [
      "Tăng tốc độ di chuyển của cầu trục.",
      "Tự động ngắt nguồn điện khi các bộ phận di chuyển đến giới hạn cho phép.",
      "Điều chỉnh độ căng của dây cáp thép.",
      "Dùng để tắt máy khi kết thúc ca làm việc."
    ],
    "answer": "Tự động ngắt nguồn điện khi các bộ phận di chuyển đến giới hạn cho phép.",
    "explain": "Đây là thiết bị an toàn ngăn chặn va chạm khi vượt quá hành trình cho phép."
  },
  {
    "id": 6,
    "question": "Tại sao không được nâng vật khi dây cáp đang bị chéo?",
    "options": [
      "Vì làm dây cáp bị bẩn.",
      "Gây lực ngang làm hỏng hướng dẫn cáp và có thể làm lật đổ thiết bị.",
      "Vì làm động cơ chạy chậm lại.",
      "Vì tốn điện năng hơn."
    ],
    "answer": "Gây lực ngang làm hỏng hướng dẫn cáp và có thể làm lật đổ thiết bị.",
    "explain": "Lực kéo ngang gây ứng suất không mong muốn lên kết cấu dầm và xe con."
  },
  {
    "id": 7,
    "question": "Khi di chuyển cầu trục không tải, móc cẩu phải được nâng lên độ cao bao nhiêu?",
    "options": [
      "Sát mặt đất để dễ quan sát.",
      "Cao hơn các chướng ngại vật ít nhất 0,5m.",
      "Nâng hết hành trình tối đa.",
      "Tùy ý người vận hành."
    ],
    "answer": "Cao hơn các chướng ngại vật ít nhất 0,5m.",
    "explain": "Đảm bảo khoảng cách an toàn để tránh va chạm với thiết bị hoặc con người bên dưới."
  },
  {
    "id": 8,
    "question": "Người dưới mặt đất ra hiệu cho người lái cầu trục bằng cách nào?",
    "options": [
      "Hét thật to.",
      "Sử dụng hệ thống tín hiệu tay hoặc cờ/còi quy định.",
      "Ném vật nhẹ lên cabin.",
      "Gọi điện thoại di động."
    ],
    "answer": "Sử dụng hệ thống tín hiệu tay hoặc cờ/còi quy định.",
    "explain": "Tín hiệu chuẩn giúp người lái hiểu chính xác yêu cầu dù môi trường nhà xưởng có tiếng ồn lớn."
  },
  {
    "id": 9,
    "question": "Ai là người được phép ra lệnh 'Dừng khẩn cấp'?",
    "options": [
      "Chỉ người tổ trưởng.",
      "Chỉ người phụ trách an toàn.",
      "Bất kỳ ai nhìn thấy nguy cơ mất an toàn.",
      "Chỉ người điều khiển."
    ],
    "answer": "Bất kỳ ai nhìn thấy nguy cơ mất an toàn.",
    "explain": "Đây là quy định an toàn tối cao để ngăn chặn tai nạn kịp thời."
  },
  {
    "id": 10,
    "question": "Trước khi nâng một vật nặng, người vận hành phải làm gì?",
    "options": [
      "Nhấn còi báo hiệu.",
      "Kiểm tra tải trọng vật nâng xem có phù hợp với sức nâng máy không.",
      "Kiểm tra tình trạng dây treo buộc.",
      "Tất cả các ý trên đều đúng."
    ],
    "answer": "Tất cả các ý trên đều đúng.",
    "explain": "Quy trình kiểm tra toàn diện trước khi nâng là bắt buộc để đảm bảo an toàn."
  },
  {
    "id": 11,
    "question": "Cấm dùng cầu trục để làm việc gì sau đây?",
    "options": [
      "Nâng vật thẳng đứng.",
      "Kéo lê vật nặng trên mặt đất.",
      "Di chuyển vật từ thấp lên cao.",
      "Xoay vật nặng trên không."
    ],
    "answer": "Kéo lê vật nặng trên mặt đất.",
    "explain": "Cầu trục chỉ thiết kế để nâng thẳng đứng; kéo lê gây lực ngang phá hủy kết cấu dầm."
  },
  {
    "id": 12,
    "question": "Trong khi cầu trục đang nâng tải, người móc cáp phải làm gì?",
    "options": [
      "Đứng ngay dưới vật nâng để giữ.",
      "Di chuyển ra khỏi vùng nguy hiểm (ngoài bán kính rơi của vật).",
      "Vịn tay vào dây cáp để giữ thăng bằng.",
      "Đi theo sát vật nâng."
    ],
    "answer": "Di chuyển ra khỏi vùng nguy hiểm (ngoài bán kính rơi của vật).",
    "explain": "Phòng trường hợp đứt cáp hoặc tuột dây, người lao động phải ở khoảng cách an toàn."
  },
  {
    "id": 13,
    "question": "Khi nâng vật có cạnh sắc nhọn, ta phải làm gì để bảo vệ dây cáp/sling?",
    "options": [
      "Dùng dây cáp to hơn.",
      "Dùng đệm lót (gỗ, cao su, ống thép xẻ...) tại các góc tiếp xúc.",
      "Nâng thật chậm.",
      "Bôi mỡ vào cạnh sắc."
    ],
    "answer": "Dùng đệm lót (gỗ, cao su, ống thép xẻ...) tại các góc tiếp xúc.",
    "explain": "Đệm lót ngăn cạnh sắc cắt đứt sợi cáp hoặc làm biến dạng vĩnh viễn dây treo."
  },
  {
    "id": 14,
    "question": "Tốc độ di chuyển của cầu trục được kiểm soát bằng gì?",
    "options": [
      "Tay lấy điện (Master controller) hoặc biến tần.",
      "Bằng cách kéo phanh tay.",
      "Tự động theo trọng lượng vật.",
      "Dùng sức người đẩy."
    ],
    "answer": "Tay lấy điện (Master controller) hoặc biến tần.",
    "explain": "Hệ thống điều khiển điện giúp thay đổi tốc độ mượt mà, tránh rung lắc vật nâng."
  },
  {
    "id": 15,
    "question": "Khi thấy phanh nâng hạ có dấu hiệu không ăn (trôi tải), người lái phải làm gì?",
    "options": [
      "Tiếp tục làm việc bình thường.",
      "Bấm còi và hạ vật xuống vị trí an toàn nhất gần đó, sau đó ngừng máy báo sửa chữa.",
      "Nhảy ra khỏi cabin.",
      "Dùng tay giữ tang trống cáp."
    ],
    "answer": "Bấm còi và hạ vật xuống vị trí an toàn nhất gần đó, sau đó ngừng máy báo sửa chữa.",
    "explain": "Xử lý bình tĩnh để đưa vật về mặt đất an toàn trước khi hỏng hóc nặng hơn."
  },
  {
    "id": 16,
    "question": "Khoảng cách an toàn tối thiểu từ cầu trục đến đường dây điện cao thế là bao nhiêu?",
    "options": [
      "0,5m.",
      "1,0m.",
      "Theo quy định an toàn điện (thường từ 2m đến 6m tùy điện áp).",
      "Không cần khoảng cách nếu có vỏ bọc."
    ],
    "answer": "Theo quy định an toàn điện (thường từ 2m đến 6m tùy điện áp).",
    "explain": "Phòng tránh hiện tượng phóng điện cao áp gây chết người và cháy nổ thiết bị."
  },
  {
    "id": 17,
    "question": "Bộ phận nào có tác dụng giữ vật nâng lơ lửng trên không?",
    "options": [
      "Động cơ nâng.",
      "Hệ thống phanh điện từ hoặc phanh thủy lực.",
      "Dây cáp thép.",
      "Móc cẩu."
    ],
    "answer": "Hệ thống phanh điện từ hoặc phanh thủy lực.",
    "explain": "Phanh luôn ở trạng thái đóng (thường đóng), chỉ mở khi có điện cấp cho động cơ chạy."
  },
  {
    "id": 18,
    "question": "Tại sao không được phép vừa nâng vật vừa di chuyển dọc/ngang với tốc độ cao?",
    "options": [
      "Tốn điện.",
      "Gây ra lực quán tính lớn làm vật nâng chao đảo mạnh, khó kiểm soát.",
      "Làm mòn bánh xe.",
      "Động cơ bị nóng."
    ],
    "answer": "Gây ra lực quán tính lớn làm vật nâng chao đảo mạnh, khó kiểm soát.",
    "explain": "Dao động lớn có thể làm vật va đập vào kết cấu nhà xưởng hoặc tuột dây treo."
  },
  {
    "id": 19,
    "question": "Mục đích của việc bôi mỡ định kỳ vào cáp thép là gì?",
    "options": [
      "Để cáp nhìn bóng đẹp.",
      "Giảm ma sát giữa các sợi thép và chống gỉ sét lõi cáp.",
      "Làm cáp nặng hơn để nâng chắc chắn.",
      "Để người móc cáp dễ cầm."
    ],
    "answer": "Giảm ma sát giữa các sợi thép và chống gỉ sét lõi cáp.",
    "explain": "Cáp thép gồm nhiều sợi nhỏ, việc bôi trơn giúp chúng trượt lên nhau linh hoạt và tăng tuổi thọ."
  },
  {
    "id": 20,
    "question": "Khi nâng vật nặng có trọng lượng bằng 100% sức nâng của cầu trục, cần lưu ý gì?",
    "options": [
      "Không nên nâng.",
      "Chỉ nâng khi thật cần thiết và phải thử phanh kỹ ở độ cao thấp.",
      "Nâng thật nhanh lên cao.",
      "Yêu cầu mọi người vào giúp giữ vật."
    ],
    "answer": "Chỉ nâng khi thật cần thiết và phải thử phanh kỹ ở độ cao thấp.",
    "explain": "Làm việc tại giới hạn định mức đòi hỏi sự cẩn trọng tối đa về tình trạng thiết bị."
  },
  {
    "id": 21,
    "question": "Khi đang nâng tải mà bộ phận hạn chế hành trình nâng (Limit switch) bị hỏng, người lái phải làm gì?",
    "options": [
      "Tiếp tục làm việc và cẩn thận không nâng quá cao.",
      "Dừng máy ngay lập tức và báo cáo thợ sửa chữa.",
      "Dùng tay đẩy công tắc để kiểm tra lại.",
      "Tháo bỏ bộ phận đó để làm việc cho nhanh."
    ],
    "answer": "Dừng máy ngay lập tức và báo cáo thợ sửa chữa.",
    "explain": "Làm việc khi thiếu thiết bị an toàn là vi phạm nghiêm trọng quy định vận hành thiết bị nâng."
  },
  {
    "id": 22,
    "question": "Tại sao phải kiểm tra tình trạng tiếp đất (nối đất) của vỏ máy cầu trục?",
    "options": [
      "Để máy chạy mạnh hơn.",
      "Để chống sét đánh.",
      "Đảm bảo an toàn, tránh điện giật khi có sự cố rò rỉ điện ra vỏ máy.",
      "Để vỏ máy không bị gỉ sét."
    ],
    "answer": "Đảm bảo an toàn, tránh điện giật khi có sự cố rò rỉ điện ra vỏ máy.",
    "explain": "Tiếp đất an toàn giúp triệt tiêu dòng điện rò, bảo vệ tính mạng người vận hành."
  },
  {
    "id": 23,
    "question": "Khi dùng hai cầu trục cùng nâng một vật nặng (Nâng kép), cần lưu ý điều gì?",
    "options": [
      "Chỉ cần hai người lái hiểu ý nhau.",
      "Phải có phương án kỹ thuật, người chỉ huy thống nhất và tải trọng không quá 80% tổng sức nâng.",
      "Nâng càng nhanh càng tốt để tránh lệch.",
      "Không bao giờ được phép nâng kép."
    ],
    "answer": "Phải có phương án kỹ thuật, người chỉ huy thống nhất và tải trọng không quá 80% tổng sức nâng.",
    "explain": "Nâng kép là thao tác phức tạp, đòi hỏi sự phối hợp tuyệt đối và hệ số an toàn cao."
  },
  {
    "id": 24,
    "question": "Âm hiệu 'Một tiếng còi ngắn' khi chuẩn bị vận hành có ý nghĩa gì?",
    "options": [
      "Chào mọi người.",
      "Báo hiệu bắt đầu di chuyển hoặc nâng tải để mọi người chú ý.",
      "Báo hiệu máy bị hỏng.",
      "Yêu cầu thợ móc cáp lại gần."
    ],
    "answer": "Báo hiệu bắt đầu di chuyển hoặc nâng tải để mọi người chú ý.",
    "explain": "Cảnh báo bằng âm thanh giúp người xung quanh nhận biết vùng nguy hiểm sắp có chuyển động."
  },
  {
    "id": 25,
    "question": "Khi di chuyển tải qua đầu người khác, người lái phải làm gì?",
    "options": [
      "Bấm còi liên tục.",
      "Tuyệt đối không được di chuyển tải qua đầu người; phải yêu cầu họ tránh đi.",
      "Nâng thật cao để người đó không chạm tới.",
      "Di chuyển thật chậm."
    ],
    "answer": "Tuyệt đối không được di chuyển tải qua đầu người; phải yêu cầu họ tránh đi.",
    "explain": "Đây là quy tắc vàng trong an toàn thiết bị nâng để tránh tai nạn chết người do rơi tải."
  },
  {
    "id": 26,
    "question": "Đối với cáp thép, dấu hiệu nào sau đây yêu cầu phải loại bỏ dây ngay lập tức?",
    "options": [
      "Dây bị khô mỡ bôi trơn.",
      "Dây có từ 1 đến 2 sợi thép nhỏ bị đứt.",
      "Dây bị xoắn nút (kink), gập gãy hoặc biến dạng lõi.",
      "Dây có vết bẩn do bùn đất."
    ],
    "answer": "Dây bị xoắn nút (kink), gập gãy hoặc biến dạng lõi.",
    "explain": "Biến dạng cấu trúc làm giảm sức bền của cáp đột ngột, rất dễ gây đứt khi chịu tải."
  },
  {
    "id": 27,
    "question": "Tiêu chuẩn loại bỏ xích tải dựa trên độ giãn dài là bao nhiêu?",
    "options": [
      "Giãn quá 1%.",
      "Giãn quá 3% so với chiều dài ban đầu.",
      "Giãn quá 5% so với chiều dài ban đầu.",
      "Xích không bao giờ bị giãn."
    ],
    "answer": "Giãn quá 5% so với chiều dài ban đầu.",
    "explain": "Xích bị giãn là dấu hiệu các mắt xích đã bị biến dạng dẻo, không còn khả năng chịu lực an toàn."
  },
  {
    "id": 28,
    "question": "Bánh xe cầu trục bị nứt vành hoặc mòn quá bao nhiêu % bề dày vành thì phải thay?",
    "options": [
      "10%.",
      "20%.",
      "40% - 50%.",
      "Chỉ khi nào vỡ mới thay."
    ],
    "answer": "40% - 50%.",
    "explain": "Độ mòn vành bánh xe quá lớn gây nguy cơ trật ray, làm đổ cầu trục."
  },
  {
    "id": 29,
    "question": "Thời hạn kiểm định định kỳ đối với cầu trục thông thường là bao lâu?",
    "options": [
      "6 tháng/lần.",
      "1 năm/lần (hoặc 2 năm tùy vào thời gian sử dụng và tình trạng máy).",
      "5 năm/lần.",
      "Không cần kiểm định nếu máy còn mới."
    ],
    "answer": "1 năm/lần (hoặc 2 năm tùy vào thời gian sử dụng và tình trạng máy).",
    "explain": "Kiểm định định kỳ giúp phát hiện các hư hỏng tiềm ẩn và duy trì điều kiện an toàn pháp lý."
  },
  {
    "id": 30,
    "question": "Khi móc vật nặng, trọng tâm của vật phải nằm ở đâu so với móc cẩu?",
    "options": [
      "Nằm lệch sang bên phải.",
      "Nằm lệch sang bên trái.",
      "Nằm thẳng đứng bên dưới tâm của móc cẩu.",
      "Nằm ở bất kỳ vị trí nào."
    ],
    "answer": "Nằm thẳng đứng bên dưới tâm của móc cẩu.",
    "explain": "Giúp vật nâng cân bằng, không bị chao đảo hoặc trượt dây khi nhấc lên khỏi mặt đất."
  },
  {
    "id": 31,
    "question": "Khi sử dụng phương pháp treo 2 điểm, nếu góc treo là 120 độ, lực căng mỗi sợi dây bằng:",
    "options": [
      "1/2 trọng lượng vật.",
      "Trình trọng lượng vật.",
      "2 lần trọng lượng vật.",
      "0,7 lần trọng lượng vật."
    ],
    "answer": "Trình trọng lượng vật.",
    "explain": "Góc treo càng lớn lực căng càng tăng, tại 120 độ lực căng bằng 100% trọng tải vật nâng."
  },
  {
    "id": 32,
    "question": "Công việc 'Treo tải' (Tamagake) theo định nghĩa bao gồm:",
    "options": [
      "Chỉ việc móc vật vào.",
      "Chỉ việc tháo vật ra.",
      "Bao gồm móc vật, ra hiệu và tháo vật.",
      "Chỉ việc buộc dây."
    ],
    "answer": "Bao gồm móc vật, ra hiệu và tháo vật.",
    "explain": "Đây là một quy trình kỹ thuật hoàn chỉnh để di chuyển vật nặng an toàn."
  },
  {
    "id": 33,
    "question": "Tại sao không nên để góc treo vượt quá 90 độ?",
    "options": [
      "Làm dây bị ngắn.",
      "Lực căng tăng rất nhanh gây đứt dây hoặc biến dạng thiết bị.",
      "Khó quan sát tín hiệu.",
      "Làm động cơ nâng bị nóng."
    ],
    "answer": "Lực căng tăng rất nhanh gây đứt dây hoặc biến dạng thiết bị.",
    "explain": "Góc treo lớn tạo lực xé ngang cực mạnh, vượt quá khả năng chịu tải của phụ kiện."
  },
  {
    "id": 34,
    "question": "Khi dùng Ma ní (Shackle) nối dây, vị trí đúng của chốt là:",
    "options": [
      "Đặt dây cáp trực tiếp lên thân chốt.",
      "Đặt dây cáp vào phần vòng cung (thân) của ma ní.",
      "Đặt chốt nằm nghiêng.",
      "Không quan trọng vị trí."
    ],
    "answer": "Đặt dây cáp vào phần vòng cung (thân) của ma ní.",
    "explain": "Đảm bảo lực phân bổ đều và tránh làm xoay chốt gây tuột ma ní."
  },
  {
    "id": 35,
    "question": "Tín hiệu tay: Cánh tay giơ cao, lòng bàn tay hướng về phía trước và vẫy là tín hiệu gì?",
    "options": [
      "Nâng tải.",
      "Hạ tải.",
      "Di chuyển ngang.",
      "Dừng lại."
    ],
    "answer": "Nâng tải.",
    "explain": "Đây là quy ước tín hiệu tay chuẩn trong vận hành thiết bị nâng hạ."
  },
  {
    "id": 36,
    "question": "Sử dụng sling vải bị rách lớp vỏ bảo vệ nhìn thấy sợi chịu lực bên trong thì phải:",
    "options": [
      "Dùng băng dính quấn lại làm tiếp.",
      "Loại bỏ ngay lập tức.",
      "Sử dụng để nâng hàng nhẹ.",
      "Bôi keo vào chỗ rách."
    ],
    "answer": "Loại bỏ ngay lập tức.",
    "explain": "Sling vải bị tổn thương lõi chịu lực không còn đảm bảo hệ số an toàn thiết kế."
  },
  {
    "id": 37,
    "question": "Khi hạ vật nặng xuống sàn, cần lưu ý điều gì?",
    "options": [
      "Hạ thật nhanh để giải phóng móc.",
      "Phải có gỗ đệm hoặc giá đỡ để tránh chèn nát dây cáp và dễ rút dây.",
      "Hạ trực tiếp xuống sàn nhà.",
      "Để vật tự rơi tự do đoạn cuối."
    ],
    "answer": "Phải có gỗ đệm hoặc giá đỡ để tránh chèn nát dây cáp và dễ rút dây.",
    "explain": "Bảo vệ sàn nhà, vật nâng và giữ tuổi thọ cho dây treo buộc."
  },
  {
    "id": 38,
    "question": "Dây cáp thép bị han gỉ bề mặt nhưng chưa đứt sợi thì:",
    "options": [
      "Dùng bình thường.",
      "Phải làm sạch, bôi mỡ bảo quản và theo dõi sát sao.",
      "Sơn lại cho đẹp.",
      "Ngâm vào nước muối."
    ],
    "answer": "Phải làm sạch, bôi mỡ bảo quản và theo dõi sát sao.",
    "explain": "Gỉ sét làm giảm tiết diện chịu lực và tính linh hoạt của cáp."
  },
  {
    "id": 39,
    "question": "Trong cabin cầu trục, trang bị nào sau đây là bắt buộc để chữa cháy?",
    "options": [
      "Xô nước.",
      "Bình chữa cháy bột hoặc khí CO2.",
      "Bao tải ướt.",
      "Cát khô."
    ],
    "answer": "Bình chữa cháy bột hoặc khí CO2.",
    "explain": "Phù hợp để dập tắt các đám cháy liên quan đến thiết bị điện trong cabin."
  },
  {
    "id": 40,
    "question": "Sling xích bị mòn mắt xích quá 10% đường kính thì phải:",
    "options": [
      "Hàn bù vào chỗ mòn.",
      "Tiếp tục dùng cho hàng nhẹ.",
      "Ngừng sử dụng và loại bỏ.",
      "Lộn ngược xích lại để dùng."
    ],
    "answer": "Ngừng sử dụng và loại bỏ.",
    "explain": "Độ mòn 10% là giới hạn an toàn kỹ thuật cho phép đối với xích chịu lực."
  },
  {
    "id": 41,
    "question": "Khi sử dụng khóa cáp (Cóc cáp - Wire rope clip), cách đặt nào là đúng kỹ thuật?",
    "options": [
      "Đặt phần thân chữ U lên đầu dây ngắn (đầu chết).",
      "Đặt phần thân chữ U lên đầu dây dài (đầu chịu lực).",
      "Đặt xen kẽ các khóa cáp ngược chiều nhau.",
      "Cách đặt nào cũng được."
    ],
    "answer": "Đặt phần thân chữ U lên đầu dây ngắn (đầu chết).",
    "explain": "Phần đế (yên) của khóa cáp phải nằm ở phía dây chịu lực để tránh làm dập cáp chính."
  },
  {
    "id": 42,
    "question": "Số lượng khóa cáp tối thiểu cho một đầu dây cáp thường là bao nhiêu?",
    "options": [
      "1 khóa.",
      "Ít nhất từ 3 khóa trở lên (tùy theo đường kính cáp).",
      "Càng nhiều càng tốt, không giới hạn.",
      "Không cần dùng khóa nếu đã thắt nút."
    ],
    "answer": "Ít nhất từ 3 khóa trở lên (tùy theo đường kính cáp).",
    "explain": "Đảm bảo đủ lực ma sát để giữ đầu cáp không bị tuột dưới tải trọng định mức."
  },
  {
    "id": 43,
    "question": "Khi di chuyển tải, nếu thấy vật bị xoay tròn, ta nên làm gì?",
    "options": [
      "Dùng tay không bắt lấy vật để dừng xoay.",
      "Dùng dây dẫn hướng (Tag line) để kiểm soát.",
      "Kéo vật vào dầm biên.",
      "Tăng tốc độ di chuyển ngang."
    ],
    "answer": "Dùng dây dẫn hướng (Tag line) để kiểm soát.",
    "explain": "Dây dẫn hướng giúp điều khiển vật từ xa mà không cần tiếp cận trực tiếp khu vực nguy hiểm."
  },
  {
    "id": 57,
    "question": "Một bộ xích có 4 nhánh, nhưng chỉ sử dụng 2 nhánh để nâng, tải trọng an toàn sẽ tính thế nào?",
    "options": [
      "Bằng 100% tổng tải trọng 4 nhánh.",
      "Chỉ tính dựa trên khả năng chịu tải của 2 nhánh đang dùng.",
      "Tính bằng 50% trọng lượng vật.",
      "Không được phép dùng như vậy."
    ],
    "answer": "Chỉ tính dựa trên khả năng chịu tải của 2 nhánh đang dùng.",
    "explain": "Phải đảm bảo 2 nhánh đang dùng đủ sức chịu 100% tải trọng của vật."
  },
  {
    "id": 58,
    "question": "Khi buộc dây kiểu 'U-lift' (treo chữ U), khả năng chịu tải của dây thay đổi thế nào?",
    "options": [
      "Giảm đi một nửa.",
      "Tăng gấp đôi (nếu dây thẳng đứng).",
      "Giữ nguyên.",
      "Giảm 20%."
    ],
    "answer": "Tăng gấp đôi (nếu dây thẳng đứng).",
    "explain": "Khi treo chữ U song song, trọng lượng vật chia đều cho 2 nhánh, nên sức nâng tổng thể tăng lên."
  },
  {
    "id": 59,
    "question": "Tại sao không được thắt nút dây cáp thép để nối dài?",
    "options": [
      "Vì nhìn không thẩm mỹ.",
      "Vì nút thắt làm giảm 50-80% sức bền của dây và gây gãy sợi thép.",
      "Vì tốn thời gian tháo nút.",
      "Vì làm dây bị bẩn."
    ],
    "answer": "Vì nút thắt làm giảm 50-80% sức bền của dây và gây gãy sợi thép.",
    "explain": "Nút thắt tạo ra những điểm ứng suất cực lớn gây phá hủy cấu trúc dây."
  },
  {
    "id": 61,
    "question": "Khi sử dụng kiểu buộc 'Thắt nút cổ chai' (Choker Hitch), khả năng chịu tải của dây thay đổi thế nào?",
    "options": [
      "Tăng lên 120% sức bền.",
      "Giữ nguyên 100% sức bền.",
      "Giảm xuống còn khoảng 75-80% sức bền định mức.",
      "Giảm xuống còn 20% sức bền định mức."
    ],
    "answer": "Giảm xuống còn khoảng 75-80% sức bền định mức.",
    "explain": "Điểm thắt nút tạo ra ứng suất uốn cục bộ làm yếu dây cáp/sling vải."
  },
  {
    "id": 62,
    "question": "Thứ tự các bước đúng khi ra tín hiệu điều khiển cầu trục là:",
    "options": [
      "Ra hiệu -> Người lái thực hiện -> Kiểm tra an toàn.",
      "Kiểm tra an toàn -> Ra hiệu -> Quan sát phản hồi.",
      "Cứ thế ra hiệu không cần quan sát.",
      "Chỉ ra hiệu khi người lái nhìn về phía mình."
    ],
    "answer": "Kiểm tra an toàn -> Ra hiệu -> Quan sát phản hồi.",
    "explain": "Luôn ưu tiên an toàn trước khi thực hiện bất kỳ lệnh chuyển động nào."
  },
  {
    "id": 63,
    "question": "Khi nâng một bó thép dài, kiểu buộc nào là an toàn nhất?",
    "options": [
      "Buộc 1 vòng đơn ở giữa.",
      "Buộc 2 vòng kiểu thắt nút cổ chai ở hai đầu bó thép.",
      "Treo trực tiếp vào móc.",
      "Dùng nam châm điện."
    ],
    "answer": "Buộc 2 vòng kiểu thắt nút cổ chai ở hai đầu bó thép.",
    "explain": "Giúp bó thép cân bằng, không bị xòe hoặc tuột các thanh thép ở giữa."
  },
  {
    "id": 64,
    "question": "Âm hiệu 'Hai tiếng còi ngắn' có ý nghĩa thông thường là gì?",
    "options": [
      "Nâng tải.",
      "Hạ tải.",
      "Di chuyển ngang.",
      "Dừng lại."
    ],
    "answer": "Hạ tải.",
    "explain": "Đây là quy ước âm hiệu thường dùng trong điều khiển thiết bị nâng tại công trường."
  },
  {
    "id": 65,
    "question": "Tại sao phải để ý góc giữa hai nhánh dây cáp khi nâng?",
    "options": [
      "Để tiết kiệm dây.",
      "Để kiểm soát lực căng; góc càng lớn lực căng càng tăng.",
      "Để vật không bị xoay.",
      "Để nâng được nhanh hơn."
    ],
    "answer": "Để kiểm soát lực căng; góc càng lớn lực căng càng tăng.",
    "explain": "Góc kẹp lớn làm tăng thành phần lực kéo ngang, dễ gây đứt dây dù tải trọng vật không đổi."
  },
  {
    "id": 66,
    "question": "Khi móc cáp vào móc cẩu, phải đảm bảo điều gì?",
    "options": [
      "Móc càng nhiều dây càng tốt.",
      "Dây cáp nằm gọn trong lòng móc và lẫy an toàn (safety latch) phải đóng.",
      "Dây cáp nằm ở đầu mũi móc.",
      "Không cần đóng lẫy an toàn."
    ],
    "answer": "Dây cáp nằm gọn trong lòng móc và lẫy an toàn (safety latch) phải đóng.",
    "explain": "Ngăn chặn việc dây cáp bị tuột ra khỏi móc khi vật nâng bị rung lắc hoặc chạm đất."
  },
  {
    "id": 67,
    "question": "Kiểm tra sling vải hàng ngày cần chú ý điều gì nhất?",
    "options": [
      "Màu sắc của dây.",
      "Các vết cắt, mòn, cháy hóa chất hoặc sợi chỉ đỏ báo hiệu giới hạn mòn.",
      "Độ dài của dây.",
      "Tên nhà sản xuất."
    ],
    "answer": "Các vết cắt, mòn, cháy hóa chất hoặc sợi chỉ đỏ báo hiệu giới hạn mòn.",
    "explain": "Sling vải rất dễ bị hỏng bởi cạnh sắc và nhiệt độ, cần kiểm tra kỹ bề mặt chịu lực."
  },
  {
    "id": 68,
    "question": "Khi sử dụng dầm cân bằng (Spreader bar) để nâng hàng có lợi ích gì?",
    "options": [
      "Làm vật nhẹ đi.",
      "Giảm góc nghiêng của dây treo, bảo vệ vật nâng không bị móp méo do lực ép ngang.",
      "Tăng tốc độ nâng.",
      "Không cần người ra tín hiệu."
    ],
    "answer": "Giảm góc nghiêng của dây treo, bảo vệ vật nâng không bị móp méo do lực ép ngang.",
    "explain": "Dầm cân bằng giúp chuyển lực ép ngang thành lực kéo thẳng đứng lên các điểm móc của vật."
  },
  {
    "id": 69,
    "question": "Nếu dây cáp bị chồng chéo trên tang trống (Drum), ta phải làm gì?",
    "options": [
      "Cứ tiếp tục nâng.",
      "Dừng lại, xả cáp ra và quấn lại cho đều.",
      "Dùng gậy chọc vào cho nó đều.",
      "Đổ dầu vào cho nó trơn."
    ],
    "answer": "Dừng lại, xả cáp ra và quấn lại cho đều.",
    "explain": "Cáp chồng chéo sẽ bị bẹp, dập và có thể làm nhảy cáp ra khỏi tang trống gây đứt đột ngột."
  },
  {
    "id": 70,
    "question": "Khi làm việc ngoài trời, nếu gió mạnh trên cấp mấy thì phải ngừng vận hành?",
    "options": [
      "Cấp 2.",
      "Cấp 4.",
      "Cấp 6 trở lên.",
      "Bất kỳ khi nào có gió."
    ],
    "answer": "Cấp 6 trở lên.",
    "explain": "Gió lớn làm vật nâng chao đảo mạnh, gây mất kiểm soát và có thể làm lật hoặc hỏng kết cấu cầu trục."
  },
  {
    "id": 71,
    "question": "Khi đang vận hành mà nghe thấy tiếng động lạ phát ra từ hộp số hoặc động cơ, người lái phải:",
    "options": [
      "Cố gắng làm nốt cho xong việc.",
      "Dừng máy ngay lập tức, hạ tải (nếu có thể) và báo bộ phận kỹ thuật.",
      "Tăng tốc độ để vượt qua điểm kêu.",
      "Đổ thêm dầu vào vị trí phát ra tiếng kêu."
    ],
    "answer": "Dừng máy ngay lập tức, hạ tải (nếu có thể) và báo bộ phận kỹ thuật.",
    "explain": "Tiếng động lạ là dấu hiệu cảnh báo hư hỏng cơ khí nghiêm trọng, tiếp tục vận hành có thể gây gãy vỡ linh kiện."
  },
  {
    "id": 72,
    "question": "Trong các loại dây sau, loại nào có khả năng chống cháy và chịu nhiệt tốt nhất?",
    "options": [
      "Sling vải (Webbing sling).",
      "Dây cáp thép.",
      "Dây xích thép chịu lực.",
      "Dây thừng nilon."
    ],
    "answer": "Dây xích thép chịu lực.",
    "explain": "Xích thép có khả năng chịu nhiệt độ cao nhất mà không bị biến dạng hoặc cháy đứt như vải hay cáp thép có lõi dầu."
  },
  {
    "id": 73,
    "question": "Sử dụng 'Tai cẩu' (Eyebolt) để nâng hàng cần lưu ý điều gì?",
    "options": [
      "Vặn thật chặt vào lỗ ren và lực kéo phải phù hợp với thiết kế của Eyebolt.",
      "Chỉ cần móc đại vào là được.",
      "Càng vặn lỏng càng tốt.",
      "Dùng Eyebolt nhỏ để nâng vật cực nặng."
    ],
    "answer": "Vặn thật chặt vào lỗ ren và lực kéo phải phù hợp với thiết kế của Eyebolt.",
    "explain": "Eyebolt nếu không vặn hết ren hoặc chịu lực chéo quá mức sẽ rất dễ bị gãy ngang."
  },
  {
    "id": 81,
    "question": "Khi nâng vật nặng có bề mặt trơn nhẵn, làm sao để dây không bị trượt?",
    "options": [
      "Bôi mỡ vào bề mặt.",
      "Sử dụng kiểu buộc nhiều vòng (Double wrap) hoặc lót thêm cao su nhám.",
      "Nâng thật nhanh.",
      "Dùng dây xích thay cho dây cáp."
    ],
    "answer": "Sử dụng kiểu buộc nhiều vòng (Double wrap) hoặc lót thêm cao su nhám.",
    "explain": "Tăng diện tích tiếp xúc và ma sát giúp cố định vật nâng, tránh rơi đổ."
  },
  {
    "id": 91,
    "question": "Khi đang vận hành mà mất điện đột ngột, người lái phải làm gì?",
    "options": [
      "Rời khỏi cabin ngay lập tức.",
      "Đưa tất cả các tay điều khiển về vị trí '0' và chờ đợi.",
      "Cố gắng dùng tay quay để hạ hàng.",
      "Kéo phanh tay liên tục."
    ],
    "answer": "Đưa tất cả các tay điều khiển về vị trí '0' và chờ đợi.",
    "explain": "Tránh việc thiết bị tự khởi động bất ngờ khi có điện trở lại gây nguy hiểm."
  },
  {
    "id": 92,
    "question": "Ai là người có quyền ký lệnh cho phép cầu trục hoạt động sau khi sửa chữa lớn?",
    "options": [
      "Người thợ sửa chữa.",
      "Người lái cầu trục.",
      "Cơ quan kiểm định và lãnh đạo đơn vị sử dụng.",
      "Bất kỳ ai."
    ],
    "answer": "Cơ quan kiểm định và lãnh đạo đơn vị sử dụng.",
    "explain": "Phải có biên bản kiểm tra thử tải và chứng nhận an toàn pháp lý sau khi can thiệp vào kết cấu máy."
  },
  {
    "id": 93,
    "question": "Ký hiệu 'SWL' (Safe Working Load) trên thiết bị nâng nghĩa là gì?",
    "options": [
      "Tốc độ làm việc an toàn.",
      "Tải trọng làm việc an toàn.",
      "Trọng lượng của chính cái máy.",
      "Chiều cao nâng tối đa."
    ],
    "answer": "Tải trọng làm việc an toàn.",
    "explain": "Đây là giới hạn tải trọng tối đa mà thiết bị được phép nâng trong điều kiện bình thường."
  },
  {
    "id": 94,
    "question": "Khi dùng sling cáp thép có 2 nhánh, góc kẹp giữa 2 nhánh nên là bao nhiêu độ là tối ưu?",
    "options": [
      "Dưới 60 độ.",
      "90 độ.",
      "120 độ.",
      "150 độ."
    ],
    "answer": "Dưới 60 độ.",
    "explain": "Góc kẹp nhỏ giúp giảm lực căng lên mỗi nhánh cáp, đảm bảo hệ số an toàn cao nhất."
  },
  {
    "id": 95,
    "question": "Người lái cầu trục có quyền từ chối nâng hàng khi nào?",
    "options": [
      "Khi thấy vật nặng hơn sức nâng của máy hoặc dây buộc không an toàn.",
      "Khi thấy trời sắp mưa.",
      "Khi không thích người thợ móc cáp.",
      "Khi muốn nghỉ giải lao."
    ],
    "answer": "Khi thấy vật nặng hơn sức nâng của máy hoặc dây buộc không an toàn.",
    "explain": "Người vận hành có quyền và trách nhiệm từ chối các lệnh vi phạm quy định an toàn."
  },
  {
    "id": 96,
    "question": "Khi di chuyển tải qua khu vực có máy móc đắt tiền, cần chú ý gì?",
    "options": [
      "Nâng thật cao để không chạm vào.",
      "Di chuyển cực chậm và có người cảnh giới, dẫn hướng ở dưới.",
      "Yêu cầu thợ máy tắt máy.",
      "Che bạt lên máy móc."
    ],
    "answer": "Di chuyển cực chậm và có người cảnh giới, dẫn hướng ở dưới.",
    "explain": "Đảm bảo tầm quan sát tối đa và sự phối hợp nhịp nhàng để tránh va chạm."
  },
  {
    "id": 97,
    "question": "Người chưa có chứng chỉ vận hành cầu trục có được điều khiển máy không?",
    "options": [
      "Được, nếu có người giỏi đứng cạnh.",
      "Tuyệt đối không, trừ trường hợp học viên đang thực hành có giáo viên kèm.",
      "Được, nếu chỉ nâng hàng nhẹ.",
      "Được, nếu là chủ xưởng."
    ],
    "answer": "Tuyệt đối không, trừ trường hợp học viên đang thực hành có giáo viên kèm.",
    "explain": "Đây là công việc yêu cầu nghiêm ngặt về chứng chỉ chuyên môn theo pháp luật lao động."
  },
  {
    "id": 98,
    "question": "Tại sao phải kiểm tra phanh nâng hạ khi bắt đầu ca làm việc?",
    "options": [
      "Để kiểm tra xem phanh có kêu không.",
      "Để đảm bảo phanh giữ được tải trọng, ngăn ngừa trôi tải tự do.",
      "Để làm nóng động cơ.",
      "Để kiểm tra điện áp."
    ],
    "answer": "Để đảm bảo phanh giữ được tải trọng, ngăn ngừa trôi tải tự do.",
    "explain": "Phanh là chốt chặn an toàn quan trọng nhất để giữ vật cố định trên không."
  },
  {
    "id": 99,
    "question": "Khi kết thúc công việc, móc cẩu nên được đặt ở đâu?",
    "options": [
      "Để sát mặt đất.",
      "Nâng lên cao (cách sàn trên 2m) và đưa về vị trí đỗ quy định.",
      "Để ở giữa nhà xưởng.",
      "Treo vật nặng vào để giữ cáp căng."
    ],
    "answer": "Nâng lên cao (cách sàn trên 2m) và đưa về vị trí đỗ quy định.",
    "explain": "Tránh gây cản trở và va chạm cho người, phương tiện di chuyển dưới sàn khi máy nghỉ."
  },
  {
    "id": 100,
    "question": "Mục tiêu cao nhất của việc học vận hành cầu trục và kỹ thuật treo tải là gì?",
    "options": [
      "Lấy chứng chỉ đi làm.",
      "Vận hành nhanh nhất có thể.",
      "Đảm bảo an toàn tuyệt đối cho người, hàng hóa và thiết bị.",
      "Để không bị phạt khi kiểm tra."
    ],
    "answer": "Đảm bảo an toàn tuyệt đối cho người, hàng hóa và thiết bị.",
    "explain": "An toàn lao động là giá trị cốt lõi và mục tiêu cuối cùng của mọi quy trình kỹ thuật."
  }
];


(function () {
  "use strict";
  const pairs = [
    [
      "Trang chủ",
      "Home"
    ],
    [
      "Kho bài tập",
      "Exercise Library"
    ],
    [
      "Tạo phiếu",
      "Create Worksheet"
    ],
    [
      "Hướng dẫn",
      "How to Use"
    ],
    [
      "Liên hệ",
      "Contact"
    ],
    [
      "Bắt đầu ngay",
      "Get Started"
    ],
    [
      "Chọn giao diện",
      "Choose theme"
    ],
    [
      "☀️ Sáng",
      "☀️ Light"
    ],
    [
      "🌙 Tối",
      "🌙 Dark"
    ],
    [
      "🌓 Tự động",
      "🌓 Auto"
    ],
    [
      "Chọn ngôn ngữ",
      "Choose language"
    ],
    [
      " Tiếng Việt",
      " Vietnamese"
    ],
    [
      " English",
      " English"
    ],
    [
      "CÔNG CỤ HỖ TRỢ GIÁO VIÊN",
      "TOOLS FOR TEACHERS"
    ],
    [
      "CÔNG CỤ GIÁO VIÊN",
      "TEACHER TOOLS"
    ],
    [
      "KHÁM PHÁ TÀI LIỆU",
      "EXPLORE RESOURCES"
    ],
    [
      "KẾT NỐI VỚI EDUSHEET",
      "CONNECT WITH EDUSHEET"
    ],
    [
      "HƯỚNG DẪN SỬ DỤNG",
      "USER GUIDE"
    ],
    [
      "EDUSHEET CÓ GÌ?",
      "WHAT DOES EDUSHEET OFFER?"
    ],
    [
      "BẮT ĐẦU THẬT ĐƠN GIẢN",
      "GETTING STARTED IS EASY"
    ],
    [
      "SẴN SÀNG BẮT ĐẦU?",
      "READY TO GET STARTED?"
    ],
    [
      "TRỢ LÝ CHUẨN BỊ BÀI",
      "LESSON PREPARATION ASSISTANT"
    ],
    [
      "Kho phiếu bài tập & đề ôn tập thông minh",
      "Smart Worksheets & Revision Tests"
    ],
    [
      "Kho phiếu bài tập",
      "Worksheet Library"
    ],
    [
      "đề ôn tập",
      "revision tests"
    ],
    [
      "thông minh",
      "smarter"
    ],
    [
      "Kho bài tập theo chủ đề",
      "Topic-Based Exercise Library"
    ],
    [
      "theo chủ đề",
      "by topic"
    ],
    [
      "Tạo phiếu bài tập",
      "Create a Worksheet"
    ],
    [
      "bài tập",
      "worksheet"
    ],
    [
      "Đóng góp & liên hệ",
      "Feedback & Contact"
    ],
    [
      "liên hệ",
      "contact"
    ],
    [
      "Bắt đầu với EduSheet",
      "Getting Started with EduSheet"
    ],
    [
      "Chuẩn bị tài liệu giảng dạy nhẹ nhàng hơn. Tìm câu hỏi theo môn học, khối lớp và chủ đề, sau đó tạo phiếu ôn tập chỉ trong vài bước.",
      "Prepare teaching materials with less effort. Find questions by subject, grade, and topic, then create a revision worksheet in just a few steps."
    ],
    [
      "Tìm kiếm và lọc câu hỏi mẫu theo môn học, khối lớp và nội dung.",
      "Search and filter sample questions by subject, grade, and topic."
    ],
    [
      "Chọn tiêu chí, tạo phiếu ngẫu nhiên, xem trước và in khi đã sẵn sàng.",
      "Choose your criteria, generate a random worksheet, preview it, and print when ready."
    ],
    [
      "Gửi câu hỏi mẫu, góp ý nội dung hoặc chia sẻ đề xuất để website ngày càng hữu ích hơn.",
      "Send sample questions, give feedback, or share suggestions to make the website more useful."
    ],
    [
      "Một vài bước đơn giản để sử dụng kho câu hỏi và tạo phiếu bài tập.",
      "A few simple steps to use the question library and create worksheets."
    ],
    [
      "Các công cụ thiết thực giúp việc chuẩn bị phiếu học tập rõ ràng và thuận tiện hơn.",
      "Practical tools that make worksheet preparation clearer and easier."
    ],
    [
      "Tài liệu phù hợp, chuẩn bị dễ dàng.",
      "The right resources, prepared with ease."
    ],
    [
      "Tiết học tốt khởi đầu từ đây.",
      "A great lesson starts here."
    ],
    [
      "Không gian giáo viên",
      "Teacher Workspace"
    ],
    [
      "Sẵn sàng",
      "Ready"
    ],
    [
      "Công cụ của bạn",
      "Your Tools"
    ],
    [
      "Truy cập nhanh",
      "Quick Access"
    ],
    [
      "Kho câu hỏi",
      "Question Library"
    ],
    [
      "Tìm tài liệu",
      "Find Resources"
    ],
    [
      "Chọn câu hỏi",
      "Choose Questions"
    ],
    [
      "Cách sử dụng",
      "How to Use"
    ],
    [
      "Đóng góp",
      "Contribute"
    ],
    [
      "Gửi câu hỏi",
      "Submit Questions"
    ],
    [
      "Sẵn sàng cho tiết học mới!",
      "Ready for a New Lesson!"
    ],
    [
      "Chọn công cụ để bắt đầu công việc.",
      "Choose a tool to get started."
    ],
    [
      "Tạo phiếu nhanh",
      "Create Worksheets Quickly"
    ],
    [
      "Tiết kiệm thời gian",
      "Save Time"
    ],
    [
      "Dễ dàng sử dụng",
      "Easy to Use"
    ],
    [
      "Thiết kế thân thiện",
      "User-Friendly Design"
    ],
    [
      "Người bạn đồng hành của giáo viên",
      "A Teacher’s Companion"
    ],
    [
      "giáo viên",
      "teachers"
    ],
    [
      "Tạo phiếu nhanh chóng",
      "Create Worksheets Quickly"
    ],
    [
      "Chọn môn học, khối lớp, chủ đề và số câu hỏi để tạo phiếu phù hợp với mục tiêu bài học.",
      "Choose a subject, grade, topic, and number of questions to create a worksheet that meets your lesson goals."
    ],
    [
      "Thử tạo phiếu",
      "Try Creating a Worksheet"
    ],
    [
      "Lọc nội dung linh hoạt",
      "Flexible Content Filters"
    ],
    [
      "Tìm câu hỏi theo môn, lớp và chủ đề để lựa chọn tài liệu cho từng tiết học.",
      "Find questions by subject, grade, and topic to choose resources for each lesson."
    ],
    [
      "Xem danh mục",
      "Browse Categories"
    ],
    [
      "Xem trước và in phiếu",
      "Preview and Print Worksheets"
    ],
    [
      "Kiểm tra nội dung phiếu, lựa chọn hiển thị đáp án và in tài liệu phục vụ giảng dạy.",
      "Review worksheet content, choose whether to show answers, and print materials for teaching."
    ],
    [
      "Tạo tài liệu",
      "Create Materials"
    ],
    [
      "Ba bước để có",
      "Three Steps to Create a"
    ],
    [
      "phiếu bài tập",
      "worksheet"
    ],
    [
      "Chọn nội dung, thiết lập số câu và xem trước phiếu của bạn.",
      "Choose the content, set the number of questions, and preview your worksheet."
    ],
    [
      "Bắt đầu tạo phiếu",
      "Start Creating a Worksheet"
    ],
    [
      "Chọn môn học và khối lớp",
      "Choose a Subject and Grade"
    ],
    [
      "Lựa chọn nội dung phù hợp với lớp học và chủ đề cần ôn tập.",
      "Choose content that fits the class and revision topic."
    ],
    [
      "Thiết lập phiếu bài tập",
      "Configure the Worksheet"
    ],
    [
      "Chọn số lượng câu hỏi và cách hiển thị đáp án.",
      "Choose the number of questions and whether to show answers."
    ],
    [
      "Xem trước và in",
      "Preview and Print"
    ],
    [
      "Kiểm tra nội dung, sau đó in phiếu để sử dụng.",
      "Review the content, then print the worksheet."
    ],
    [
      "Chuẩn bị bài tập dễ dàng hơn",
      "Make Worksheet Preparation Easier"
    ],
    [
      "cùng EduSheet.",
      "with EduSheet."
    ],
    [
      "Khám phá kho câu hỏi và tạo phiếu ôn tập theo nhu cầu.",
      "Explore the question library and create revision worksheets to suit your needs."
    ],
    [
      "Kho phiếu bài tập và đề ôn tập dành cho giáo viên.",
      "A library of worksheets and revision tests for teachers."
    ],
    [
      "© 2026 EduSheet - Kho phiếu bài tập và đề ôn tập - Nhóm 7",
      "© 2026 EduSheet - Worksheet and Revision Test Library - Group 7"
    ],
    [
      "Từ khóa",
      "Keyword"
    ],
    [
      "Môn học",
      "Subject"
    ],
    [
      "Tất cả môn học",
      "All Subjects"
    ],
    [
      "Khối lớp",
      "Grade"
    ],
    [
      "Tất cả khối lớp",
      "All Grades"
    ],
    [
      "Lớp 10",
      "Grade 10"
    ],
    [
      "Lớp 11",
      "Grade 11"
    ],
    [
      "Lớp 12",
      "Grade 12"
    ],
    [
      "Danh sách câu hỏi",
      "Question List"
    ],
    [
      "Tạo phiếu từ kho câu hỏi",
      "Create a Worksheet from the Library"
    ],
    [
      "Nhập từ khóa cần tìm",
      "Enter a keyword to search"
    ],
    [
      "Tất cả chủ đề",
      "All Topics"
    ],
    [
      "Cùng xây dựng kho học liệu hữu ích",
      "Let’s Build a Useful Learning Library"
    ],
    [
      "Bạn có thể gửi ý kiến đóng góp hoặc đề xuất câu hỏi để tham khảo trong quá trình học tập và giảng dạy.",
      "You can share feedback or suggest questions to support learning and teaching."
    ],
    [
      "CHÚNG TÔI LUÔN LẮNG NGHE",
      "WE’RE ALWAYS LISTENING"
    ],
    [
      "Góp ý nội dung",
      "Content Feedback"
    ],
    [
      "Chia sẻ lỗi hoặc đề xuất cải thiện website.",
      "Report an issue or suggest a website improvement."
    ],
    [
      "Đóng góp câu hỏi",
      "Contribute Questions"
    ],
    [
      "Gửi câu hỏi kèm môn học, lớp và chủ đề.",
      "Submit questions with the subject, grade, and topic."
    ],
    [
      "Gửi thông tin",
      "Send a Message"
    ],
    [
      "Các trường có dấu * là bắt buộc.",
      "Fields marked * are required."
    ],
    [
      "Họ và tên *",
      "Full Name *"
    ],
    [
      "Email *",
      "Email *"
    ],
    [
      "Nội dung đóng góp",
      "Feedback Type"
    ],
    [
      "Góp ý website",
      "Website feedback"
    ],
    [
      "Báo lỗi nội dung",
      "Report a content issue"
    ],
    [
      "Khác",
      "Other"
    ],
    [
      "Nội dung chi tiết *",
      "Message Details *"
    ],
    [
      "Biểu mẫu demo chưa gửi dữ liệu đến máy chủ.",
      "This demo form does not send data to a server."
    ],
    [
      "Làm thế nào để tìm câu hỏi?",
      "How do I find questions?"
    ],
    [
      "Mở mục Kho bài tập, nhập từ khóa hoặc chọn môn học và khối lớp để lọc danh sách câu hỏi mẫu.",
      "Open the Exercise Library, enter a keyword, or select a subject and grade to filter sample questions."
    ],
    [
      "Làm thế nào để tạo phiếu?",
      "How do I create a worksheet?"
    ],
    [
      "Vào Tạo phiếu, chọn môn học, khối lớp, chủ đề và số câu hỏi. Nhấn nút tạo phiếu để xem kết quả.",
      "Go to Create Worksheet, select the subject, grade, topic, and number of questions. Click the create button to view the result."
    ],
    [
      "Có thể in phiếu bài tập không?",
      "Can I print a worksheet?"
    ],
    [
      "Có. Sau khi tạo phiếu, nhấn In phiếu. Trong hộp thoại in của trình duyệt, bạn có thể chọn máy in hoặc lưu thành PDF.",
      "Yes. After creating a worksheet, click Print Worksheet. In the browser’s print dialog, you can choose a printer or save it as a PDF."
    ],
    [
      "Dữ liệu câu hỏi có phải đề chính thức không?",
      "Are these official exam questions?"
    ],
    [
      "Các câu hỏi đang có là dữ liệu minh họa. Giáo viên cần kiểm tra và đối chiếu chương trình trước khi sử dụng thực tế.",
      "The current questions are examples. Teachers should review them and check them against the curriculum before using them."
    ],
    [
      "Lưu ý: Đây là website mẫu chạy phía trình duyệt. Biểu mẫu liên hệ chưa gửi dữ liệu đến máy chủ.",
      "Note: This is a sample website that runs in the browser. The contact form does not send data to a server."
    ],
    [
      "Lưu ý:",
      "Note:"
    ],
    [
      "Thiết lập phiếu",
      "Worksheet Settings"
    ],
    [
      "Điều chỉnh theo nhu cầu của bạn.",
      "Adjust it to your needs."
    ],
    [
      "-- Chọn môn học --",
      "-- Select a subject --"
    ],
    [
      "-- Chọn khối lớp --",
      "-- Select a grade --"
    ],
    [
      "Chủ đề",
      "Topic"
    ],
    [
      "Số câu hỏi",
      "Number of Questions"
    ],
    [
      "5 câu",
      "5 questions"
    ],
    [
      "10 câu",
      "10 questions"
    ],
    [
      "15 câu",
      "15 questions"
    ],
    [
      "20 câu",
      "20 questions"
    ],
    [
      "Hiển thị đáp án trong bản xem trước",
      "Show answers in preview"
    ],
    [
      "Tạo phiếu ngẫu nhiên",
      "Generate Worksheet"
    ],
    [
      "Dữ liệu câu hỏi hiện là dữ liệu mẫu.",
      "The question bank currently contains sample data."
    ],
    [
      "Phiếu bài tập sẽ xuất hiện ở đây",
      "Your worksheet will appear here"
    ],
    [
      "Chọn môn học, lớp và nhấn “Tạo phiếu ngẫu nhiên” để bắt đầu.",
      "Select a subject and grade, then click “Generate Worksheet” to begin."
    ],
    [
      "Tin học",
      "Computer Science"
    ],
    [
      "Toán học",
      "Mathematics"
    ],
    [
      "Ngữ văn",
      "Literature"
    ],
    [
      "Tiếng Anh",
      "English"
    ],
    [
      "Thông tin và dữ liệu",
      "Information and Data"
    ],
    [
      "Mạng máy tính",
      "Computer Networks"
    ],
    [
      "An toàn số",
      "Digital Safety"
    ],
    [
      "Lập trình cơ bản",
      "Basic Programming"
    ],
    [
      "Bảng tính",
      "Spreadsheets"
    ],
    [
      "Cơ sở dữ liệu",
      "Databases"
    ],
    [
      "Hình học",
      "Geometry"
    ],
    [
      "Lượng giác",
      "Trigonometry"
    ],
    [
      "Dãy số",
      "Sequences"
    ],
    [
      "Đạo hàm",
      "Derivatives"
    ],
    [
      "Xác suất",
      "Probability"
    ],
    [
      "Đọc hiểu",
      "Reading Comprehension"
    ],
    [
      "Nghị luận",
      "Argumentative Writing"
    ],
    [
      "Nghị luận xã hội",
      "Social Argumentative Writing"
    ],
    [
      "Nhận biết",
      "Recognition"
    ],
    [
      "Thông hiểu",
      "Comprehension"
    ],
    [
      "Vận dụng",
      "Application"
    ],
    [
      "Grammar",
      "Grammar"
    ],
    [
      "Vocabulary",
      "Vocabulary"
    ],
    [
      "Đơn vị nhỏ nhất dùng để biểu diễn thông tin trong máy tính là gì?",
      "What is the smallest unit used to represent information in a computer?"
    ],
    [
      "Một byte thường gồm bao nhiêu bit?",
      "How many bits are usually in one byte?"
    ],
    [
      "Internet là gì?",
      "What is the Internet?"
    ],
    [
      "Khi nhận được liên kết lạ yêu cầu nhập mật khẩu, em nên làm gì?",
      "What should you do if you receive an unfamiliar link asking for your password?"
    ],
    [
      "Trong JavaScript, từ khóa nào thường dùng khai báo biến có thể gán lại?",
      "In JavaScript, which keyword is commonly used to declare a variable that can be reassigned?"
    ],
    [
      "Cấu trúc if...else dùng để làm gì?",
      "What is the if...else structure used for?"
    ],
    [
      "Trong bảng tính, công thức thường bắt đầu bằng ký hiệu nào?",
      "Which symbol does a spreadsheet formula usually begin with?"
    ],
    [
      "HTTPS giúp ích điều gì khi truy cập website?",
      "How does HTTPS help when visiting a website?"
    ],
    [
      "Cơ sở dữ liệu được tổ chức nhằm mục đích chính nào?",
      "What is the main purpose of organizing a database?"
    ],
    [
      "Đồ thị hàm số bậc nhất y = ax + b (a khác 0) là hình gì?",
      "What shape is the graph of the linear function y = ax + b (a ≠ 0)?"
    ],
    [
      "Tổng ba góc trong một tam giác bằng bao nhiêu độ?",
      "What is the sum of the three angles in a triangle?"
    ],
    [
      "Giá trị sin(90°) bằng bao nhiêu?",
      "What is the value of sin(90°)?"
    ],
    [
      "Trong cấp số cộng, hiệu giữa hai số hạng liên tiếp gọi là gì?",
      "In an arithmetic sequence, what is the difference between consecutive terms called?"
    ],
    [
      "Đạo hàm của hàm số y = x² là gì?",
      "What is the derivative of y = x²?"
    ],
    [
      "Xác suất của một biến cố chắc chắn bằng bao nhiêu?",
      "What is the probability of a certain event?"
    ],
    [
      "Xác định chủ đề giúp người đọc làm gì?",
      "What does identifying the theme help a reader do?"
    ],
    [
      "Bài văn nghị luận thường cần yếu tố nào để làm sáng tỏ luận điểm?",
      "What does an argumentative essay usually need to support its main claim?"
    ],
    [
      "Dẫn chứng trong bài nghị luận cần có đặc điểm nào?",
      "What qualities should evidence in an argumentative essay have?"
    ],
    [
      "Choose the correct form: She ___ to school every day.",
      "Choose the correct form: She ___ to school every day."
    ],
    [
      "Which word is closest in meaning to 'important'?",
      "Which word is closest in meaning to 'important'?"
    ],
    [
      "Choose the correct passive form: They built the bridge in 2020.",
      "Choose the correct passive form: They built the bridge in 2020."
    ],
    [
      "Byte",
      "Byte"
    ],
    [
      "Bit",
      "Bit"
    ],
    [
      "Kilobyte",
      "Kilobyte"
    ],
    [
      "Megabyte",
      "Megabyte"
    ],
    [
      "2 bit",
      "2 bits"
    ],
    [
      "4 bit",
      "4 bits"
    ],
    [
      "8 bit",
      "8 bits"
    ],
    [
      "16 bit",
      "16 bits"
    ],
    [
      "Phần mềm soạn thảo",
      "Word-processing software"
    ],
    [
      "Mạng kết nối các mạng máy tính trên phạm vi toàn cầu",
      "A network connecting computer networks worldwide"
    ],
    [
      "Thiết bị lưu trữ",
      "Storage device"
    ],
    [
      "Hệ điều hành",
      "Operating system"
    ],
    [
      "Nhập ngay",
      "Enter it immediately"
    ],
    [
      "Chuyển cho bạn bè",
      "Forward it to friends"
    ],
    [
      "Không mở và kiểm tra nguồn gửi",
      "Do not open it; verify the sender"
    ],
    [
      "Tắt phần mềm bảo vệ",
      "Turn off security software"
    ],
    [
      "let",
      "let"
    ],
    [
      "style",
      "style"
    ],
    [
      "href",
      "href"
    ],
    [
      "print",
      "print"
    ],
    [
      "Lặp vô hạn",
      "Infinite loop"
    ],
    [
      "Rẽ nhánh theo điều kiện",
      "Branch based on a condition"
    ],
    [
      "Tạo hình ảnh",
      "Create an image"
    ],
    [
      "Khai báo CSS",
      "Declare CSS"
    ],
    [
      "Tăng kích thước màn hình",
      "Increase screen size"
    ],
    [
      "Mã hóa kết nối trình duyệt và website",
      "Encrypt the connection between the browser and website"
    ],
    [
      "Tự sửa mọi lỗi",
      "Automatically fix every error"
    ],
    [
      "Tăng dung lượng ổ cứng",
      "Increase hard drive capacity"
    ],
    [
      "Lưu trữ và quản lí dữ liệu có tổ chức",
      "Store and manage data in an organized way"
    ],
    [
      "Trang trí màn hình",
      "Decorate the screen"
    ],
    [
      "Thay bộ xử lí",
      "Replace the processor"
    ],
    [
      "Tăng độ sáng",
      "Increase brightness"
    ],
    [
      "Đường tròn",
      "Circle"
    ],
    [
      "Đường thẳng",
      "Straight line"
    ],
    [
      "Parabol",
      "Parabola"
    ],
    [
      "Elip",
      "Ellipse"
    ],
    [
      "90°",
      "90°"
    ],
    [
      "180°",
      "180°"
    ],
    [
      "270°",
      "270°"
    ],
    [
      "360°",
      "360°"
    ],
    [
      "0",
      "0"
    ],
    [
      "1",
      "1"
    ],
    [
      "-1",
      "-1"
    ],
    [
      "Không xác định",
      "Undefined"
    ],
    [
      "Công bội",
      "Common ratio"
    ],
    [
      "Công sai",
      "Common difference"
    ],
    [
      "Tỉ số",
      "Ratio"
    ],
    [
      "Trung vị",
      "Median"
    ],
    [
      "x",
      "x"
    ],
    [
      "2x",
      "2x"
    ],
    [
      "x²",
      "x²"
    ],
    [
      "Không liên quan",
      "Irrelevant"
    ],
    [
      "Bỏ qua nội dung",
      "Ignore the content"
    ],
    [
      "Nắm vấn đề chính văn bản đề cập",
      "Understand the main issue discussed in the text"
    ],
    [
      "Đếm số câu",
      "Count the sentences"
    ],
    [
      "Tìm từ dài nhất",
      "Find the longest word"
    ],
    [
      "Luận cứ và lập luận",
      "Evidence and reasoning"
    ],
    [
      "Chỉ tiêu đề",
      "Only a title"
    ],
    [
      "Câu không liên quan",
      "An unrelated sentence"
    ],
    [
      "Chỉ lời thoại",
      "Only dialogue"
    ],
    [
      "Càng dài càng tốt",
      "The longer, the better"
    ],
    [
      "Phù hợp, xác thực và gắn với luận điểm",
      "Relevant, accurate, and connected to the claim"
    ],
    [
      "Không cần giải thích",
      "No explanation needed"
    ],
    [
      "go",
      "go"
    ],
    [
      "goes",
      "goes"
    ],
    [
      "going",
      "going"
    ],
    [
      "gone",
      "gone"
    ],
    [
      "Tiny",
      "Tiny"
    ],
    [
      "Significant",
      "Significant"
    ],
    [
      "Late",
      "Late"
    ],
    [
      "Empty",
      "Empty"
    ],
    [
      "The bridge built in 2020.",
      "The bridge built in 2020."
    ],
    [
      "The bridge was built in 2020.",
      "The bridge was built in 2020."
    ],
    [
      "The bridge is build in 2020.",
      "The bridge is build in 2020."
    ],
    [
      "The bridge has build in 2020.",
      "The bridge has build in 2020."
    ]
  ];
  const viToEn = new Map(pairs);
  const enToVi = new Map(pairs.map(([vi, en]) => [en, vi]));
  const attrs = ["placeholder", "aria-label", "title", "alt"];
  let currentLanguage = localStorage.getItem("edusheet-language") || "vi";
  if (!['vi', 'en'].includes(currentLanguage)) currentLanguage = 'vi';
  let observer;

  function translateValue(value, language) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const dict = language === 'en' ? viToEn : enToVi;
    if (!dict.has(trimmed)) return value;
    return value.replace(trimmed, dict.get(trimmed));
  }

  function translateNode(node, language) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const translated = translateValue(node.nodeValue, language);
      if (translated !== node.nodeValue) node.nodeValue = translated;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches('script, style, noscript, .notranslate')) return;
    attrs.forEach(attr => {
      if (node.hasAttribute(attr)) {
        const oldValue = node.getAttribute(attr);
        const newValue = translateValue(oldValue, language);
        if (oldValue !== newValue) node.setAttribute(attr, newValue);
      }
    });
    node.childNodes.forEach(child => translateNode(child, language));
  }

  function updateSelect(language) {
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = language;
  }

  function setLanguage(language) {
    if (!['vi', 'en'].includes(language)) language = 'vi';
    // Stop observing during a full pass to avoid reacting to our own text updates.
    if (observer) observer.disconnect();
    translateNode(document.body, language);
    currentLanguage = language;
    document.documentElement.lang = language;
    localStorage.setItem('edusheet-language', language);
    const titles = {
      vi: {
        'index.html': 'EduSheet | Kho phiếu bài tập và đề ôn tập',
        'categories.html': 'Kho bài tập | EduSheet',
        'generator.html': 'Tạo phiếu bài tập | EduSheet',
        'faq.html': 'Hướng dẫn sử dụng | EduSheet',
        'contact.html': 'Liên hệ | EduSheet'
      },
      en: {
        'index.html': 'EduSheet | Worksheet and Revision Test Library',
        'categories.html': 'Exercise Library | EduSheet',
        'generator.html': 'Create a Worksheet | EduSheet',
        'faq.html': 'User Guide | EduSheet',
        'contact.html': 'Contact | EduSheet'
      }
    };
    const page = location.pathname.split('/').pop() || 'index.html';
    if (titles[language][page]) document.title = titles[language][page];

    // Keep headings with styled inline spans grammatically correct in both languages.
    const headingOverrides = {
      'index.html': {
        vi: 'Kho phiếu bài tập<br>&amp; đề ôn tập <span class="title-highlight">thông minh</span>',
        en: 'Smart Worksheets<br>&amp; Revision Tests <span class="title-highlight">Made Easy</span>'
      },
      'categories.html': {
        vi: 'Kho bài tập <span>theo chủ đề</span>',
        en: 'Topic-Based <span>Exercise Library</span>'
      },
      'generator.html': {
        vi: 'Tạo phiếu <span>bài tập</span>',
        en: 'Create a <span>Worksheet</span>'
      },
      'contact.html': {
        vi: 'Đóng góp &amp; <span>liên hệ</span>',
        en: 'Feedback &amp; <span>Contact</span>'
      },
      'faq.html': {
        vi: 'Bắt đầu với <span>EduSheet</span>',
        en: 'Getting Started with <span>EduSheet</span>'
      }
    };
    const pageHeading = document.querySelector('.hero h1, .page-hero h1');
    if (pageHeading && headingOverrides[page]) pageHeading.innerHTML = headingOverrides[page][language];

    updateSelect(language);
    if (observer) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  document.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'languageSelect') setLanguage(event.target.value);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = currentLanguage;
    observer = new MutationObserver(records => {
      // Translate newly generated content (e.g. question cards and worksheet preview).
      for (const record of records) {
        if (record.type === 'characterData') translateNode(record.target, currentLanguage);
        record.addedNodes && record.addedNodes.forEach(node => translateNode(node, currentLanguage));
      }
    });
    setLanguage(currentLanguage);
  });
})();

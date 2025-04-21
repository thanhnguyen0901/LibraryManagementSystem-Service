CREATE DATABASE IF NOT EXISTS QuanLyThuVien
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE QuanLyThuVien;


-- Tài khoản người dùng (cho cả Thủ Thư và Độc Giả)
CREATE TABLE TaiKhoan (
    MaTaiKhoan INT PRIMARY KEY AUTO_INCREMENT,
    TenDangNhap VARCHAR(50) NOT NULL UNIQUE,
    MatKhau VARCHAR(100) NOT NULL
);

-- Bảng độc giả
CREATE TABLE DocGia (
    MaDG INT PRIMARY KEY AUTO_INCREMENT,
    TenDG VARCHAR(100),
    LoaiDG VARCHAR(10),
    NgaySinhDG DATE,
    EmailDG VARCHAR(100),
    NgLapThe VARCHAR(100),
    MaTaiKhoan INT,
    FOREIGN KEY (MaTaiKhoan) REFERENCES TaiKhoan(MaTaiKhoan)
);

-- Bảng thủ thư
CREATE TABLE ThuThu (
    MaTT INT PRIMARY KEY AUTO_INCREMENT,
    TenTT VARCHAR(100),
    GioiTinhTT VARCHAR(10),
    NgaySinhTT DATE,
    EmailTT VARCHAR(100),
    DiaChiTT VARCHAR(255),
    GhiChu TEXT,
    MaTaiKhoan INT,
    FOREIGN KEY (MaTaiKhoan) REFERENCES TaiKhoan(MaTaiKhoan)
);

-- Bảng sách
CREATE TABLE Sach (
    MaSach INT PRIMARY KEY AUTO_INCREMENT,
    ChuDe VARCHAR(100),
    TenTG VARCHAR(100),
    TenSach VARCHAR(255),
    NamXB INT,
    NhaXB VARCHAR(100),
    TriGia DECIMAL(10,2),
    TinhTrang VARCHAR(50),
    NgayNhap DATE
);

-- Bảng phiếu mượn
CREATE TABLE PhieuMuon (
    MaPhieu INT PRIMARY KEY AUTO_INCREMENT,
    MaDG INT,
    MaSach INT,
    NgayMuon DATE,
    NgayTra DATE,
    SLMuon INT,
    TienPhatDaThu DECIMAL(10, 2) DEFAULT 0 AFTER SLMuon,
    FOREIGN KEY (MaDG) REFERENCES DocGia(MaDG),
    FOREIGN KEY (MaSach) REFERENCES Sach(MaSach)
);

-- Chi tiết phiếu mượn (lưu số lần mượn)
CREATE TABLE ChiTietPM (
    MaCTPM INT PRIMARY KEY AUTO_INCREMENT,
    MaSach INT,
    NgayThang DATE,
    SoLanMuon INT,
    FOREIGN KEY (MaSach) REFERENCES Sach(MaSach)
);

-- Các tham số hệ thống như tuổi tối đa, giá trị thẻ, tiền phạt,...
CREATE TABLE ThamSo (
    GiaTriThe DECIMAL(10,2),
    SoTuoiDG INT,
    ThoiGianXB INT,
    TienPhat DECIMAL(10,2)
);


--------------------------------------
-- Dữ liệu mẫu cho các bảng
--------------------------------------

USE QuanLyThuVien;

-- Tài khoản
INSERT INTO TaiKhoan (TenDangNhap, MatKhau) VALUES
('thuthu01', 'matkhau123'),
('docgia01', 'matkhau456');

-- Độc giả
INSERT INTO DocGia (TenDG, LoaiDG, NgaySinhDG, EmailDG, NgLapThe, MaTaiKhoan) VALUES
('Nguyễn Văn A', 'X', '1990-05-20', 'vana@example.com', 'Thủ Thư 1', 2);

-- Thủ thư
INSERT INTO ThuThu (TenTT, GioiTinhTT, NgaySinhTT, EmailTT, DiaChiTT, GhiChu, MaTaiKhoan) VALUES
('Trần Thị B', 'Nữ', '1988-10-15', 'ttb@example.com', '123 Nguyễn Trãi', 'Thủ thư chính', 1);

-- Sách
INSERT INTO Sach (ChuDe, TenTG, TenSach, NamXB, NhaXB, TriGia, TinhTrang, NgayNhap) VALUES
('Khoa học', 'Phạm Văn C', 'Vật Lý Ứng Dụng', 2020, 'NXB Giáo Dục', 45000, 'Còn', '2023-01-10'),
('Văn học', 'Nguyễn Nhật Ánh', 'Cho tôi xin một vé đi tuổi thơ', 2018, 'NXB Trẻ', 55000, 'Còn', '2023-02-15');

-- Phiếu mượn
INSERT INTO PhieuMuon (MaDG, MaSach, NgayMuon, NgayTra, SLMuon) VALUES
(1, 1, '2024-04-01', '2024-04-05', 1);

-- Chi tiết phiếu mượn
INSERT INTO ChiTietPM (MaSach, NgayThang, SoLanMuon) VALUES
(1, '2024-04-01', 3),

(2, '2024-03-10', 1);

-- Tham số hệ thống
INSERT INTO ThamSo (GiaTriThe, SoTuoiDG, ThoiGianXB, TienPhat) VALUES
(50000, 55, 8, 1000);

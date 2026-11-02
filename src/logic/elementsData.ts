import { ElementData } from './elements';

export const ELEMENTS_DATA: ElementData[] = [
  // Chu kỳ 1
  {
    z: 1, symbol: 'H', nameVi: 'Hiđro', nameEn: 'Hydrogen', atomicMass: '1.008', group: 1, period: 1,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '1s¹', configFull: '1s¹',
    discoverer: 'Henry Cavendish', year: 1766,
    notes: 'Được Henry Cavendish nhận biết là một chất khí riêng biệt năm 1766; Lavoisier đặt tên là Hydrogen năm 1783.'
  },
  {
    z: 2, symbol: 'He', nameVi: 'Heli', nameEn: 'Helium', atomicMass: '4.0026', group: 18, period: 1,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '1s²', configFull: '1s²',
    discoverer: 'Pierre Janssen & Norman Lockyer', year: 1868,
    notes: 'Phát hiện qua vạch quang phổ Mặt Trời trong nhật thực năm 1868; William Ramsay cô lập trên Trái Đất năm 1895.'
  },

  // Chu kỳ 2
  {
    z: 3, symbol: 'Li', nameVi: 'Liti', nameEn: 'Lithium', atomicMass: '6.94', group: 1, period: 2,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[He] 2s¹', configFull: '1s² 2s¹',
    discoverer: 'Johan August Arfwedson', year: 1817,
    notes: 'Phát hiện trong khoáng vật petalite; Humphry Davy điện phân cô lập kim loại nguyên chất năm 1821.'
  },
  {
    z: 4, symbol: 'Be', nameVi: 'Beri', nameEn: 'Beryllium', atomicMass: '9.0122', group: 2, period: 2,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[He] 2s²', configFull: '1s² 2s²',
    discoverer: 'Louis Nicolas Vauquelin', year: 1798,
    notes: 'Phát hiện dạng oxit trong ngọc bích và ngọc lục bảo; Friedrich Wöhler và Antoine Bussy cô lập kim loại năm 1828.'
  },
  {
    z: 5, symbol: 'B', nameVi: 'Bo', nameEn: 'Boron', atomicMass: '10.81', group: 13, period: 2,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[He] 2s² 2p¹', configFull: '1s² 2s² 2p¹',
    discoverer: 'Joseph Louis Gay-Lussac & Louis Jacques Thénard', year: 1808,
    notes: 'Được Gay-Lussac, Thénard (Pháp) và Humphry Davy (Anh) độc lập cô lập từ axit boric năm 1808.'
  },
  {
    z: 6, symbol: 'C', nameVi: 'Carbon', nameEn: 'Carbon', atomicMass: '12.011', group: 14, period: 2,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[He] 2s² 2p²', configFull: '1s² 2s² 2p²',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Than củi và kim cương được biết từ thời cổ đại; Antoine Lavoisier chứng minh là nguyên tố hóa học năm 1789.'
  },
  {
    z: 7, symbol: 'N', nameVi: 'Nitơ', nameEn: 'Nitrogen', atomicMass: '14.007', group: 15, period: 2,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[He] 2s² 2p³', configFull: '1s² 2s² 2p³',
    discoverer: 'Daniel Rutherford', year: 1772,
    notes: 'Được Daniel Rutherford cô lập và gọi là "không khí độc hại" năm 1772; Chaptal đặt tên là Nitrogen.'
  },
  {
    z: 8, symbol: 'O', nameVi: 'Oxy', nameEn: 'Oxygen', atomicMass: '15.999', group: 16, period: 2,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[He] 2s² 2p⁴', configFull: '1s² 2s² 2p⁴',
    discoverer: 'Carl Wilhelm Scheele (1771) và Joseph Priestley (1774)', year: 1774,
    notes: 'Carl Wilhelm Scheele (1771) và Joseph Priestley (1774), phát hiện độc lập; Lavoisier đặt tên.'
  },
  {
    z: 9, symbol: 'F', nameVi: 'Flo', nameEn: 'Fluorine', atomicMass: '18.998', group: 17, period: 2,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[He] 2s² 2p⁵', configFull: '1s² 2s² 2p⁵',
    discoverer: 'Henri Moissan', year: 1886,
    notes: 'Được dự đoán từ lâu nhưng cực kỳ hoạt động; Henri Moissan là người đầu tiên cô lập thành công bằng điện phân năm 1886.'
  },
  {
    z: 10, symbol: 'Ne', nameVi: 'Neon', nameEn: 'Neon', atomicMass: '20.180', group: 18, period: 2,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[He] 2s² 2p⁶', configFull: '1s² 2s² 2p⁶',
    discoverer: 'William Ramsay & Morris Travers', year: 1898,
    notes: 'Phát hiện qua chưng cất phân đoạn không khí lỏng tại Đại học London năm 1898.'
  },

  // Chu kỳ 3
  {
    z: 11, symbol: 'Na', nameVi: 'Natri', nameEn: 'Sodium', atomicMass: '22.990', group: 1, period: 3,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[Ne] 3s¹', configFull: '1s² 2s² 2p⁶ 3s¹',
    discoverer: 'Humphry Davy', year: 1807,
    notes: 'Humphry Davy cô lập bằng điện phân xút ăn da (NaOH) nóng chảy vào năm 1807.'
  },
  {
    z: 12, symbol: 'Mg', nameVi: 'Magie', nameEn: 'Magnesium', atomicMass: '24.305', group: 2, period: 3,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[Ne] 3s²', configFull: '1s² 2s² 2p⁶ 3s²',
    discoverer: 'Joseph Black (1755), Humphry Davy cô lập', year: 1808,
    notes: 'Joseph Black nhận ra magie là một nguyên tố riêng năm 1755; Humphry Davy cô lập kim loại nguyên chất năm 1808.'
  },
  {
    z: 13, symbol: 'Al', nameVi: 'Nhôm', nameEn: 'Aluminium', atomicMass: '26.982', group: 13, period: 3,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Ne] 3s² 3p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p¹',
    discoverer: 'Hans Christian Ørsted', year: 1825,
    notes: 'Nhà vật lý Đan Mạch Hans Christian Ørsted tạo ra mẫu nhôm đầu tiên năm 1825; Friedrich Wöhler hoàn thiện quy trình năm 1827.'
  },
  {
    z: 14, symbol: 'Si', nameVi: 'Silic', nameEn: 'Silicon', atomicMass: '28.085', group: 14, period: 3,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[Ne] 3s² 3p²', configFull: '1s² 2s² 2p⁶ 3s² 3p²',
    discoverer: 'Jöns Jacob Berzelius', year: 1824,
    notes: 'Berzelius điều chế silic vô định hình tinh khiết năm 1824 bằng phản ứng giữa kali và kali florosilicat.'
  },
  {
    z: 15, symbol: 'P', nameVi: 'Photpho', nameEn: 'Phosphorus', atomicMass: '30.974', group: 15, period: 3,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[Ne] 3s² 3p³', configFull: '1s² 2s² 2p⁶ 3s² 3p³',
    discoverer: 'Hennig Brand', year: 1669,
    notes: 'Nhà giả kim Hennig Brand phát hiện tại Hamburg khi chưng cất nước tiểu để tìm Hòn đá phù thủy; đây là nguyên tố đầu tiên có tên người phát hiện rõ ràng.'
  },
  {
    z: 16, symbol: 'S', nameVi: 'Lưu huỳnh', nameEn: 'Sulfur', atomicMass: '32.06', group: 16, period: 3,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[Ne] 3s² 3p⁴', configFull: '1s² 2s² 2p⁶ 3s² 3p⁴',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Được sử dụng từ thời cổ đại ở Ấn Độ, Hy Lạp và Trung Hoa; Lavoisier chứng minh là nguyên tố hóa học năm 1777.'
  },
  {
    z: 17, symbol: 'Cl', nameVi: 'Clo', nameEn: 'Chlorine', atomicMass: '35.45', group: 17, period: 3,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[Ne] 3s² 3p⁵', configFull: '1s² 2s² 2p⁶ 3s² 3p⁵',
    discoverer: 'Carl Wilhelm Scheele', year: 1774,
    notes: 'Scheele tạo ra khí clo khi cho axit clohiđric tác dụng với mangan dioxit; Humphry Davy xác nhận là nguyên tố năm 1810.'
  },
  {
    z: 18, symbol: 'Ar', nameVi: 'Argon', nameEn: 'Argon', atomicMass: '39.95', group: 18, period: 3,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[Ne] 3s² 3p⁶', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶',
    discoverer: 'Lord Rayleigh & William Ramsay', year: 1894,
    notes: 'Tách ra từ không khí sau khi loại bỏ hết oxy và nitơ; là khí hiếm đầu tiên được phát hiện trên Trái Đất.'
  },

  // Chu kỳ 4
  {
    z: 19, symbol: 'K', nameVi: 'Kali', nameEn: 'Potassium', atomicMass: '39.098', group: 1, period: 4,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[Ar] 4s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹',
    discoverer: 'Humphry Davy', year: 1807,
    notes: 'Humphry Davy cô lập bằng điện phân kali hydroxit (KOH) nóng chảy năm 1807.'
  },
  {
    z: 20, symbol: 'Ca', nameVi: 'Canxi', nameEn: 'Calcium', atomicMass: '40.078', group: 2, period: 4,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[Ar] 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²',
    discoverer: 'Humphry Davy', year: 1808,
    notes: 'Humphry Davy cô lập kim loại canxi bằng điện phân hỗn hợp vôi và thủy ngân oxit năm 1808.'
  },
  {
    z: 21, symbol: 'Sc', nameVi: 'Scandi', nameEn: 'Scandium', atomicMass: '44.956', group: 3, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d¹ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²',
    discoverer: 'Lars Fredrik Nilson', year: 1879,
    notes: 'Phát hiện tại Thụy Điển trong khoáng vật euxenite và gadolinite; chính là nguyên tố "ekaboron" mà Mendeleev đã dự đoán.'
  },
  {
    z: 22, symbol: 'Ti', nameVi: 'Titan', nameEn: 'Titanium', atomicMass: '47.867', group: 4, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d² 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²',
    discoverer: 'William Gregor', year: 1791,
    notes: 'Mục sư William Gregor phát hiện trong cát ilmenite ở Cornwall; Martin Heinrich Klaproth đặt tên theo các vị thần Titan.'
  },
  {
    z: 23, symbol: 'V', nameVi: 'Vanadi', nameEn: 'Vanadium', atomicMass: '50.942', group: 5, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d³ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²',
    discoverer: 'Andrés Manuel del Río', year: 1801,
    notes: 'Andrés Manuel del Río phát hiện tại Mexico năm 1801; Nils Gabriel Sefström tái phát hiện năm 1830 và đặt tên theo nữ thần Vanadís.'
  },
  {
    z: 24, symbol: 'Cr', nameVi: 'Crom', nameEn: 'Chromium', atomicMass: '51.996', group: 6, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d⁵ 4s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹',
    discoverer: 'Louis Nicolas Vauquelin', year: 1797,
    notes: 'Cấu hình electron bất thường (bán bão hòa phân lớp 3d⁵ 4s¹). Vauquelin cô lập từ khoáng quặng crocoite năm 1797.'
  },
  {
    z: 25, symbol: 'Mn', nameVi: 'Mangan', nameEn: 'Manganese', atomicMass: '54.938', group: 7, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d⁵ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²',
    discoverer: 'Johan Gottlieb Gahn', year: 1774,
    notes: 'Johan Gottlieb Gahn cô lập bằng cách khử pyrolusite (MnO₂) với carbon năm 1774.'
  },
  {
    z: 26, symbol: 'Fe', nameVi: 'Sắt', nameEn: 'Iron', atomicMass: '55.845', group: 8, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d⁶ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Được sử dụng từ thiên niên kỷ thứ 4 TCN (sắt thiên thạch) và khởi đầu Thời đại Đồ sắt khắp thế giới.'
  },
  {
    z: 27, symbol: 'Co', nameVi: 'Coban', nameEn: 'Cobalt', atomicMass: '58.933', group: 9, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d⁷ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²',
    discoverer: 'Georg Brandt', year: 1735,
    notes: 'Georg Brandt chứng minh màu xanh trong thủy tinh là do một kim loại mới tạo nên, chứ không phải bismuth.'
  },
  {
    z: 28, symbol: 'Ni', nameVi: 'Niken', nameEn: 'Nickel', atomicMass: '58.693', group: 10, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d⁸ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²',
    discoverer: 'Axel Fredrik Cronstedt', year: 1751,
    notes: 'Cronstedt cô lập niken từ quặng niccolite tại mỏ đồng ở Thụy Điển năm 1751.'
  },
  {
    z: 29, symbol: 'Cu', nameVi: 'Đồng', nameEn: 'Copper', atomicMass: '63.546', group: 11, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d¹⁰ 4s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Cấu hình electron bất thường (bão hòa phân lớp 3d¹⁰ 4s¹). Kim loại đầu tiên loài người luyện thành công (~5000 TCN).'
  },
  {
    z: 30, symbol: 'Zn', nameVi: 'Kẽm', nameEn: 'Zinc', atomicMass: '65.38', group: 12, period: 4,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d¹⁰ 4s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²',
    discoverer: 'Biết từ thời cổ đại (Andreas Marggraf cô lập)', year: 1746,
    notes: 'Được luyện ở Ấn Độ và Trung Quốc từ thế kỷ 12; Andreas Marggraf cô lập kim loại tinh khiết ở châu Âu năm 1746.'
  },
  {
    z: 31, symbol: 'Ga', nameVi: 'Gali', nameEn: 'Gallium', atomicMass: '69.723', group: 13, period: 4,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹',
    discoverer: 'Paul-Émile Lecoq de Boisbaudran', year: 1875,
    notes: 'Phát hiện qua quang phổ trong quặng kẽm blende năm 1875; khẳng định tiên đoán về "eka-aluminium" của Mendeleev.'
  },
  {
    z: 32, symbol: 'Ge', nameVi: 'Gecmani', nameEn: 'Germanium', atomicMass: '72.630', group: 14, period: 4,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²',
    discoverer: 'Clemens Winkler', year: 1886,
    notes: 'Clemens Winkler phân tích quặng argyrodite năm 1886; là minh chứng rực rỡ cho nguyên tố "eka-silicon" của Mendeleev.'
  },
  {
    z: 33, symbol: 'As', nameVi: 'Asen', nameEn: 'Arsenic', atomicMass: '74.922', group: 15, period: 4,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p³', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³',
    discoverer: 'Albertus Magnus (~1250)', year: 1250,
    notes: 'Hợp chất được người Hy Lạp và La Mã cổ đại biết tới; Albertus Magnus được coi là người đầu tiên cô lập asen nguyên tố khoảng năm 1250.'
  },
  {
    z: 34, symbol: 'Se', nameVi: 'Selen', nameEn: 'Selenium', atomicMass: '78.971', group: 16, period: 4,
    category: 'phi kim', generalType: 'Phi kim',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p⁴', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴',
    discoverer: 'Jöns Jacob Berzelius', year: 1817,
    notes: 'Phát hiện trong cặn axit sunfuric ở Thụy Điển; đặt tên theo Selene (nữ thần Mặt Trăng trong thần thoại Hy Lạp).'
  },
  {
    z: 35, symbol: 'Br', nameVi: 'Brom', nameEn: 'Bromine', atomicMass: '79.904', group: 17, period: 4,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p⁵', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵',
    discoverer: 'Antoine Jérôme Balard & Carl Löwig', year: 1826,
    notes: 'Balard cô lập từ tro rong biển ở Montpellier; Carl Löwig độc lập cô lập từ nước khoáng Bad Kreuznach năm 1825.'
  },
  {
    z: 36, symbol: 'Kr', nameVi: 'Kripton', nameEn: 'Krypton', atomicMass: '83.798', group: 18, period: 4,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[Ar] 3d¹⁰ 4s² 4p⁶', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶',
    discoverer: 'William Ramsay & Morris Travers', year: 1898,
    notes: 'Phát hiện trong phần cặn sau khi hóa lỏng và cho bay hơi gần hết không khí lỏng năm 1898.'
  },

  // Chu kỳ 5
  {
    z: 37, symbol: 'Rb', nameVi: 'Rubidi', nameEn: 'Rubidium', atomicMass: '85.468', group: 1, period: 5,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[Kr] 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹',
    discoverer: 'Robert Bunsen & Gustav Kirchhoff', year: 1861,
    notes: 'Phát hiện bằng máy quang phổ ngọn lửa mới chế tạo tại Heidelberg nhờ các vạch phổ màu đỏ sẫm đặc trưng.'
  },
  {
    z: 38, symbol: 'Sr', nameVi: 'Stronti', nameEn: 'Strontium', atomicMass: '87.62', group: 2, period: 5,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[Kr] 5s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²',
    discoverer: 'Adair Crawford (1790), Humphry Davy cô lập', year: 1808,
    notes: 'Crawford nhận biết từ khoáng vật tại làng Strontian (Scotland); Humphry Davy điện phân cô lập kim loại năm 1808.'
  },
  {
    z: 39, symbol: 'Y', nameVi: 'Ytri', nameEn: 'Yttrium', atomicMass: '88.906', group: 3, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹ 5s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²',
    discoverer: 'Johan Gadolin', year: 1794,
    notes: 'Phát hiện trong khoáng vật lạ tại mỏ Ytterby gần Stockholm, Thụy Điển.'
  },
  {
    z: 40, symbol: 'Zr', nameVi: 'Zirconi', nameEn: 'Zirconium', atomicMass: '91.224', group: 4, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d² 5s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²',
    discoverer: 'Martin Heinrich Klaproth', year: 1789,
    notes: 'Klaproth phân tích khoáng vật zircon từ Sri Lanka năm 1789; Jöns Jacob Berzelius cô lập kim loại năm 1824.'
  },
  {
    z: 41, symbol: 'Nb', nameVi: 'Niobi', nameEn: 'Niobium', atomicMass: '92.906', group: 5, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d⁴ 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹',
    discoverer: 'Charles Hatchett', year: 1801,
    notes: 'Cấu hình electron ngoại lệ 4d⁴ 5s¹. Hatchett phát hiện trong quặng columbite tại Bảo tàng Anh.'
  },
  {
    z: 42, symbol: 'Mo', nameVi: 'Molipđen', nameEn: 'Molybdenum', atomicMass: '95.95', group: 6, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d⁵ 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹',
    discoverer: 'Carl Wilhelm Scheele', year: 1778,
    notes: 'Cấu hình ngoại lệ 4d⁵ 5s¹. Scheele phát hiện năm 1778; Peter Jacob Hjelm cô lập kim loại năm 1781.'
  },
  {
    z: 43, symbol: 'Tc', nameVi: 'Tecneti', nameEn: 'Technetium', atomicMass: '[97]', group: 7, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d⁵ 5s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²',
    discoverer: 'Carlo Perrier & Emilio Segrè', year: 1937,
    notes: 'Nguyên tố phóng xạ đầu tiên được điều chế nhân tạo bằng máy gia tốc cyclotron tại Palermo, Ý.'
  },
  {
    z: 44, symbol: 'Ru', nameVi: 'Ruteni', nameEn: 'Ruthenium', atomicMass: '101.07', group: 8, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d⁷ 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹',
    discoverer: 'Karl Ernst Claus', year: 1844,
    notes: 'Cấu hình ngoại lệ 4d⁷ 5s¹. Claus cô lập từ cặn bạch kim tại Đại học Kazan, Nga.'
  },
  {
    z: 45, symbol: 'Rh', nameVi: 'Rhodi', nameEn: 'Rhodium', atomicMass: '102.91', group: 9, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d⁸ 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹',
    discoverer: 'William Hyde Wollaston', year: 1804,
    notes: 'Cấu hình ngoại lệ 4d⁸ 5s¹. Wollaston phát hiện trong quặng bạch kim thô từ Nam Mỹ.'
  },
  {
    z: 46, symbol: 'Pd', nameVi: 'Paladi', nameEn: 'Palladium', atomicMass: '106.42', group: 10, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹⁰', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰',
    discoverer: 'William Hyde Wollaston', year: 1802,
    notes: 'Cấu hình cực kỳ đặc biệt với lớp 5s hoàn toàn trống: 4d¹⁰ 5s⁰. Wollaston đặt tên theo tiểu hành tinh Pallas.'
  },
  {
    z: 47, symbol: 'Ag', nameVi: 'Bạc', nameEn: 'Silver', atomicMass: '107.87', group: 11, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹⁰ 5s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Cấu hình ngoại lệ 4d¹⁰ 5s¹. Kim loại quý được sử dụng làm tiền tệ và trang sức từ thiên niên kỷ thứ 4 TCN.'
  },
  {
    z: 48, symbol: 'Cd', nameVi: 'Cadimi', nameEn: 'Cadmium', atomicMass: '112.41', group: 12, period: 5,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹⁰ 5s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²',
    discoverer: 'Karl Samuel Leberecht Hermann & Friedrich Stromeyer', year: 1817,
    notes: 'Stromeyer phát hiện trong mẫu kẽm cacbonat nhiễm tạp chất màu vàng tại Göttingen năm 1817.'
  },
  {
    z: 49, symbol: 'In', nameVi: 'Indi', nameEn: 'Indium', atomicMass: '114.82', group: 13, period: 5,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹',
    discoverer: 'Ferdinand Reich & Hieronymous Theodor Richter', year: 1863,
    notes: 'Phát hiện bằng quang phổ kế nhờ vạch màu xanh chàm (indigo) rực rỡ trong quặng sphalerite tại Freiberg.'
  },
  {
    z: 50, symbol: 'Sn', nameVi: 'Thiếc', nameEn: 'Tin', atomicMass: '118.71', group: 14, period: 5,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Hợp kim với đồng tạo nên Thời đại Đồ đồng (~3000 TCN); được dùng làm đồ dùng gia đình và đồ trang trí.'
  },
  {
    z: 51, symbol: 'Sb', nameVi: 'Antimon', nameEn: 'Antimony', atomicMass: '121.76', group: 15, period: 5,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p³', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Khoáng vật stibnite được dùng làm mỹ phẩm kẻ mắt từ Ai Cập cổ đại; Vannoccio Biringuccio mô tả việc cô lập năm 1540.'
  },
  {
    z: 52, symbol: 'Te', nameVi: 'Telu', nameEn: 'Tellurium', atomicMass: '127.60', group: 16, period: 5,
    category: 'á kim', generalType: 'Á kim',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p⁴', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴',
    discoverer: 'Franz-Joseph Müller von Reichenstein', year: 1782,
    notes: 'Phát hiện trong quặng vàng tại Transylvania; Martin Heinrich Klaproth cô lập và đặt tên năm 1798 theo Tellus (Trái Đất).'
  },
  {
    z: 53, symbol: 'I', nameVi: 'Iot', nameEn: 'Iodine', atomicMass: '126.90', group: 17, period: 5,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p⁵', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵',
    discoverer: 'Bernard Courtois', year: 1811,
    notes: 'Courtois vô tình phát hiện khói màu tím khi thêm axit sunfuric vào tro rong biển sản xuất thuốc súng.'
  },
  {
    z: 54, symbol: 'Xe', nameVi: 'Xenon', nameEn: 'Xenon', atomicMass: '131.29', group: 18, period: 5,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[Kr] 4d¹⁰ 5s² 5p⁶', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶',
    discoverer: 'William Ramsay & Morris Travers', year: 1898,
    notes: 'Phát hiện tại Đại học London trong cặn chiết xuất từ không khí lỏng; đặt tên từ tiếng Hy Lạp "xenos" (người lạ).'
  },

  // Chu kỳ 6
  {
    z: 55, symbol: 'Cs', nameVi: 'Xesi', nameEn: 'Caesium', atomicMass: '132.91', group: 1, period: 6,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[Xe] 6s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹',
    discoverer: 'Robert Bunsen & Gustav Kirchhoff', year: 1860,
    notes: 'Nguyên tố đầu tiên được phát hiện bằng quang phổ kế nhờ hai vạch màu xanh da trời (caesius) rực rỡ.'
  },
  {
    z: 56, symbol: 'Ba', nameVi: 'Bari', nameEn: 'Barium', atomicMass: '137.33', group: 2, period: 6,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[Xe] 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²',
    discoverer: 'Carl Wilhelm Scheele (1772), Humphry Davy cô lập', year: 1808,
    notes: 'Scheele phát hiện barit năm 1772; Humphry Davy điện phân muối bari nóng chảy cô lập kim loại năm 1808.'
  },

  // Lantan series (57-71)
  {
    z: 57, symbol: 'La', nameVi: 'Lantan', nameEn: 'Lanthanum', atomicMass: '138.91', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 5d¹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²',
    discoverer: 'Carl Gustaf Mosander', year: 1839,
    notes: 'Cấu hình ngoại lệ 5d¹ 6s² (chưa điền vào phân lớp 4f). Mosander phát hiện như một tạp chất ẩn trong cerium nitrat.'
  },
  {
    z: 58, symbol: 'Ce', nameVi: 'Xeri', nameEn: 'Cerium', atomicMass: '140.12', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹ 5d¹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹ 5d¹ 6s²',
    discoverer: 'Martin Heinrich Klaproth, Jöns Jacob Berzelius & Wilhelm Hisinger', year: 1803,
    notes: 'Cấu hình ngoại lệ 4f¹ 5d¹ 6s². Được hai nhóm độc lập phát hiện năm 1803; đặt tên theo tiểu hành tinh Ceres.'
  },
  {
    z: 59, symbol: 'Pr', nameVi: 'Praseođym', nameEn: 'Praseodymium', atomicMass: '140.91', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f³ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f³ 6s²',
    discoverer: 'Carl Auer von Welsbach', year: 1885,
    notes: 'Auer von Welsbach tách chất didymium thành hai nguyên tố riêng biệt: praseodymium và neodymium.'
  },
  {
    z: 60, symbol: 'Nd', nameVi: 'Neođym', nameEn: 'Neodymium', atomicMass: '144.24', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁴ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁴ 6s²',
    discoverer: 'Carl Auer von Welsbach', year: 1885,
    notes: 'Tách từ didymium năm 1885 tại Vienna; thành phần chính trong nam châm đất hiếm Neodymium cực mạnh ngày nay.'
  },
  {
    z: 61, symbol: 'Pm', nameVi: 'Prometi', nameEn: 'Promethium', atomicMass: '[145]', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁵ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁵ 6s²',
    discoverer: 'Jacob A. Marinsky, Lawrence E. Glendenin & Charles D. Coryell', year: 1945,
    notes: 'Được tổng hợp từ sản phẩm phân hạch urani tại Phòng thí nghiệm Quốc gia Oak Ridge (ORNL).'
  },
  {
    z: 62, symbol: 'Sm', nameVi: 'Samari', nameEn: 'Samarium', atomicMass: '150.36', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁶ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁶ 6s²',
    discoverer: 'Paul-Émile Lecoq de Boisbaudran', year: 1879,
    notes: 'Phát hiện qua quang phổ trong khoáng vật samarskite tại Paris năm 1879.'
  },
  {
    z: 63, symbol: 'Eu', nameVi: 'Europi', nameEn: 'Europium', atomicMass: '151.96', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁷ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 6s²',
    discoverer: 'Eugène-Anatole Demarçay', year: 1896,
    notes: 'Demarçay tách được phân đoạn europi tinh khiết năm 1901; đặt tên theo lục địa Châu Âu.'
  },
  {
    z: 64, symbol: 'Gd', nameVi: 'Gađolini', nameEn: 'Gadolinium', atomicMass: '157.25', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁷ 5d¹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 5d¹ 6s²',
    discoverer: 'Jean Charles Galissard de Marignac', year: 1880,
    notes: 'Cấu hình ngoại lệ 4f⁷ 5d¹ 6s² (bán bão hòa bền vững 4f⁷). Đặt tên vinh danh Johan Gadolin.'
  },
  {
    z: 65, symbol: 'Tb', nameVi: 'Técbi', nameEn: 'Terbium', atomicMass: '158.93', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f⁹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁹ 6s²',
    discoverer: 'Carl Gustaf Mosander', year: 1843,
    notes: 'Mosander tách từ yttria cùng với erbium; đặt tên theo mỏ Ytterby (Thụy Điển).'
  },
  {
    z: 66, symbol: 'Dy', nameVi: 'Đisprosi', nameEn: 'Dysprosium', atomicMass: '162.50', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁰ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁰ 6s²',
    discoverer: 'Paul-Émile Lecoq de Boisbaudran', year: 1886,
    notes: 'Tách từ oxit holmi sau hơn 30 lần kết tinh phân đoạn; tên gốc tiếng Hy Lạp nghĩa là "khó tiếp cận".'
  },
  {
    z: 67, symbol: 'Ho', nameVi: 'Honmi', nameEn: 'Holmium', atomicMass: '164.93', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹¹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹¹ 6s²',
    discoverer: 'Marc Delafontaine & Jacques-Louis Soret', year: 1878,
    notes: 'Per Teodor Cleve độc lập tách và cô lập năm 1879, đặt tên theo thủ đô Stockholm (Holmia).'
  },
  {
    z: 68, symbol: 'Er', nameVi: 'Eribi', nameEn: 'Erbium', atomicMass: '167.26', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹² 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹² 6s²',
    discoverer: 'Carl Gustaf Mosander', year: 1843,
    notes: 'Phát hiện tại Thụy Điển; cũng được đặt tên theo ngôi làng mỏ quặng nổi tiếng Ytterby.'
  },
  {
    z: 69, symbol: 'Tm', nameVi: 'Tuli', nameEn: 'Thulium', atomicMass: '168.93', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹³ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹³ 6s²',
    discoverer: 'Per Teodor Cleve', year: 1879,
    notes: 'Cleve tách từ quặng erbia năm 1879; đặt tên theo Thule, vùng đất huyền thoại ở cực bắc Bắc Âu.'
  },
  {
    z: 70, symbol: 'Yb', nameVi: 'Ytecbi', nameEn: 'Ytterbium', atomicMass: '173.05', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 6s²',
    discoverer: 'Jean Charles Galissard de Marignac', year: 1878,
    notes: 'Tách từ erbia tại Geneva năm 1878; nguyên tố thứ tư được đặt tên theo làng Ytterby.'
  },
  {
    z: 71, symbol: 'Lu', nameVi: 'Luteti', nameEn: 'Lutetium', atomicMass: '174.97', group: 'f-block', period: 6,
    category: 'họ Lantan', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹ 6s²',
    discoverer: 'Georges Urbain & Carl Auer von Welsbach', year: 1907,
    notes: 'Cấu hình 4f¹⁴ 5d¹ 6s². Nguyên tố cuối cùng trong nhóm lantan được tìm thấy trong tự nhiên.'
  },

  // Tiếp tục chu kỳ 6 (nhóm 4-18)
  {
    z: 72, symbol: 'Hf', nameVi: 'Hafni', nameEn: 'Hafnium', atomicMass: '178.49', group: 4, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d² 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d² 6s²',
    discoverer: 'Dirk Coster & George de Hevesy', year: 1923,
    notes: 'Phát hiện tại Copenhagen bằng phân tích tia X dựa trên lý thuyết cấu trúc nguyên tử của Niels Bohr.'
  },
  {
    z: 73, symbol: 'Ta', nameVi: 'Tantan', nameEn: 'Tantalum', atomicMass: '180.95', group: 5, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d³ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d³ 6s²',
    discoverer: 'Anders Gustaf Ekeberg', year: 1802,
    notes: 'Ekeberg phát hiện trong khoáng vật pegmatit tại Phần Lan và Thụy Điển; đặt tên theo vua Tantalus trong thần thoại.'
  },
  {
    z: 74, symbol: 'W', nameVi: 'Vonfram', nameEn: 'Tungsten', atomicMass: '183.84', group: 6, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d⁴ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁴ 6s²',
    discoverer: 'Carl Wilhelm Scheele (1781), Juan José & Fausto Elhuyar cô lập', year: 1783,
    notes: 'Scheele phát hiện axit tungstic năm 1781; anh em nhà Elhuyar cô lập kim loại tinh khiết tại Tây Ban Nha năm 1783.'
  },
  {
    z: 75, symbol: 'Re', nameVi: 'Reni', nameEn: 'Rhenium', atomicMass: '186.21', group: 7, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d⁵ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁵ 6s²',
    discoverer: 'Walter Noddack, Ida Tacke & Otto Berg', year: 1925,
    notes: 'Phát hiện tại Đức trong quặng platin và columbit; là nguyên tố bền cuối cùng trong tự nhiên được phát hiện.'
  },
  {
    z: 76, symbol: 'Os', nameVi: 'Osmi', nameEn: 'Osmium', atomicMass: '190.23', group: 8, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d⁶ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁶ 6s²',
    discoverer: 'Smithson Tennant', year: 1803,
    notes: 'Tennant phát hiện trong cặn không tan của bạch kim thô tác dụng với nước cường toan; kim loại có khối lượng riêng lớn nhất.'
  },
  {
    z: 77, symbol: 'Ir', nameVi: 'Iriđi', nameEn: 'Iridium', atomicMass: '192.22', group: 9, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d⁷ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁷ 6s²',
    discoverer: 'Smithson Tennant', year: 1803,
    notes: 'Tennant phát hiện cùng với Osmi năm 1803; đặt tên theo nữ thần cầu vồng Iris vì muối của nó có nhiều màu sắc.'
  },
  {
    z: 78, symbol: 'Pt', nameVi: 'Platin', nameEn: 'Platinum', atomicMass: '195.08', group: 10, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d⁹ 6s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁹ 6s¹',
    discoverer: 'Antonio de Ulloa', year: 1735,
    notes: 'Cấu hình ngoại lệ 5d⁹ 6s¹. Thổ dân Nam Mỹ đã sử dụng từ thời tiền Columbus; Antonio de Ulloa công bố mô tả khoa học năm 1735.'
  },
  {
    z: 79, symbol: 'Au', nameVi: 'Vàng', nameEn: 'Gold', atomicMass: '196.97', group: 11, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Cấu hình ngoại lệ 5d¹⁰ 6s¹. Kim loại quý được nhân loại đúc tiền và chế tác nghệ thuật sớm nhất từ ít nhất 6000 năm trước.'
  },
  {
    z: 80, symbol: 'Hg', nameVi: 'Thủy ngân', nameEn: 'Mercury', atomicMass: '200.59', group: 12, period: 6,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s²',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Được tìm thấy trong các ngôi mộ Ai Cập cổ đại từ 1500 TCN; kim loại duy nhất ở thể lỏng tại điều kiện tiêu chuẩn.'
  },
  {
    z: 81, symbol: 'Tl', nameVi: 'Tali', nameEn: 'Thallium', atomicMass: '204.38', group: 13, period: 6,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p¹',
    discoverer: 'William Crookes', year: 1861,
    notes: 'Crookes phát hiện bằng phương pháp quang phổ nhờ vạch xanh lá cây chồi non rực rỡ trong bã quặng axit sunfuric.'
  },
  {
    z: 82, symbol: 'Pb', nameVi: 'Chì', nameEn: 'Lead', atomicMass: '207.2', group: 14, period: 6,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p²',
    discoverer: 'Biết từ thời cổ đại', year: 'Thời cổ đại',
    notes: 'Được sử dụng làm ống dẫn nước từ thời La Mã cổ đại và các tượng đài từ thiên niên kỷ thứ 7 TCN.'
  },
  {
    z: 83, symbol: 'Bi', nameVi: 'Bismut', nameEn: 'Bismuth', atomicMass: '208.98', group: 15, period: 6,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p³',
    discoverer: 'Biết từ thời cổ đại (Claude François Geoffroy chứng minh)', year: 1753,
    notes: 'Người Inca và các nhà giả kim thời Trung Cổ từng nhầm với chì và thiếc; Claude François Geoffroy chứng minh là nguyên tố riêng biệt năm 1753.'
  },
  {
    z: 84, symbol: 'Po', nameVi: 'Poloni', nameEn: 'Polonium', atomicMass: '[209]', group: 16, period: 6,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
    discoverer: 'Marie Curie & Pierre Curie', year: 1898,
    notes: 'Cô lập từ quặng uraninite (pitchblende) tại Paris; đặt tên để vinh danh quê hương Ba Lan (Polonia) của Marie Curie.'
  },
  {
    z: 85, symbol: 'At', nameVi: 'Atatin', nameEn: 'Astatine', atomicMass: '[210]', group: 17, period: 6,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
    discoverer: 'Dale R. Corson, Kenneth Ross MacKenzie & Emilio Segrè', year: 1940,
    notes: 'Tổng hợp nhân tạo tại Đại học California, Berkeley bằng cách bắn phá bismuth-209 bằng hạt alpha.'
  },
  {
    z: 86, symbol: 'Rn', nameVi: 'Radon', nameEn: 'Radon', atomicMass: '[222]', group: 18, period: 6,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
    discoverer: 'Friedrich Ernst Dorn', year: 1900,
    notes: 'Dorn phát hiện khí phóng xạ thoát ra từ hợp chất radi (gọi là "radi emanation"); William Ramsay cô lập năm 1908.'
  },

  // Chu kỳ 7
  {
    z: 87, symbol: 'Fr', nameVi: 'Franxi', nameEn: 'Francium', atomicMass: '[223]', group: 1, period: 7,
    category: 'kim loại kiềm', generalType: 'Kim loại',
    configCondensed: '[Rn] 7s¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s¹',
    discoverer: 'Marguerite Perey', year: 1939,
    notes: 'Marguerite Perey phát hiện tại Viện Curie ở Paris từ sự phân rã của actini-227; nguyên tố tự nhiên cuối cùng được tìm thấy.'
  },
  {
    z: 88, symbol: 'Ra', nameVi: 'Radi', nameEn: 'Radium', atomicMass: '[226]', group: 2, period: 7,
    category: 'kim loại kiềm thổ', generalType: 'Kim loại',
    configCondensed: '[Rn] 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s²',
    discoverer: 'Marie Curie & Pierre Curie', year: 1898,
    notes: 'Marie và Pierre Curie phát hiện dạng clorua trong quặng pitchblende năm 1898; Marie Curie điện phân cô lập kim loại năm 1910.'
  },

  // Actini series (89-103)
  {
    z: 89, symbol: 'Ac', nameVi: 'Actini', nameEn: 'Actinium', atomicMass: '[227]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 6d¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 6d¹ 7s²',
    discoverer: 'André-Louis Debierne', year: 1899,
    notes: 'Cấu hình ngoại lệ 6d¹ 7s² (chưa điền vào phân lớp 5f). Debierne tách từ cặn quặng uraninite.'
  },
  {
    z: 90, symbol: 'Th', nameVi: 'Thori', nameEn: 'Thorium', atomicMass: '232.04', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 6d² 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 6d² 7s²',
    discoverer: 'Jöns Jacob Berzelius', year: 1829,
    notes: 'Cấu hình ngoại lệ 6d² 7s² (không có electron 5f). Berzelius phát hiện trong khoáng vật thorite từ đảo Løvøya, Na Uy.'
  },
  {
    z: 91, symbol: 'Pa', nameVi: 'Protactini', nameEn: 'Protactinium', atomicMass: '231.04', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f² 6d¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f² 6d¹ 7s²',
    discoverer: 'Kasimir Fajans & Oswald Helmuth Göhring', year: 1913,
    notes: 'Cấu hình ngoại lệ 5f² 6d¹ 7s². Otto Hahn và Lise Meitner độc lập phát hiện đồng vị bền hơn Pa-231 năm 1917.'
  },
  {
    z: 92, symbol: 'U', nameVi: 'Urani', nameEn: 'Uranium', atomicMass: '238.03', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f³ 6d¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f³ 6d¹ 7s²',
    discoverer: 'Martin Heinrich Klaproth', year: 1789,
    notes: 'Cấu hình ngoại lệ 5f³ 6d¹ 7s². Klaproth phát hiện trong pitchblende; Eugène-Melchior Péligot cô lập kim loại năm 1841.'
  },
  {
    z: 93, symbol: 'Np', nameVi: 'Neptuni', nameEn: 'Neptunium', atomicMass: '[237]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f⁴ 6d¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f⁴ 6d¹ 7s²',
    discoverer: 'Edwin McMillan & Philip H. Abelson (LBNL Berkeley)', year: 1940,
    notes: 'Cấu hình ngoại lệ 5f⁴ 6d¹ 7s². Nguyên tố siêu urani đầu tiên được tổng hợp bằng máy gia tốc cyclotron 60-inch tại Berkeley.'
  },
  {
    z: 94, symbol: 'Pu', nameVi: 'Plutoni', nameEn: 'Plutonium', atomicMass: '[244]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f⁶ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f⁶ 7s²',
    discoverer: 'Glenn T. Seaborg, Edwin McMillan, Joseph W. Kennedy & Arthur Wahl (LBNL Berkeley)', year: 1940,
    notes: 'Tổng hợp bằng cách bắn phá urani bằng deuteron tại LBNL Berkeley vào tháng 12 năm 1940.'
  },
  {
    z: 95, symbol: 'Am', nameVi: 'Americi', nameEn: 'Americium', atomicMass: '[243]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f⁷ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f⁷ 7s²',
    discoverer: 'Glenn T. Seaborg, Ralph A. James, Leon O. Morgan & Albert Ghiorso (LBNL Berkeley)', year: 1944,
    notes: 'Tạo ra trong dự án Manhattan tại Phòng thí nghiệm Luyện kim Đại học Chicago và LBNL Berkeley.'
  },
  {
    z: 96, symbol: 'Cm', nameVi: 'Curi', nameEn: 'Curium', atomicMass: '[247]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f⁷ 6d¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f⁷ 6d¹ 7s²',
    discoverer: 'Glenn T. Seaborg, Ralph A. James & Albert Ghiorso (LBNL Berkeley)', year: 1944,
    notes: 'Cấu hình ngoại lệ 5f⁷ 6d¹ 7s² (bán bão hòa 5f⁷ bền vững). Đặt tên vinh danh Marie và Pierre Curie.'
  },
  {
    z: 97, symbol: 'Bk', nameVi: 'Berkelium', nameEn: 'Berkelium', atomicMass: '[247]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f⁹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f⁹ 7s²',
    discoverer: 'Stanley G. Thompson, Albert Ghiorso & Glenn T. Seaborg (LBNL Berkeley)', year: 1949,
    notes: 'Tổng hợp bằng cách bắn phá hạt alpha vào americium-241 tại Đại học California, Berkeley.'
  },
  {
    z: 98, symbol: 'Cf', nameVi: 'Californi', nameEn: 'Californium', atomicMass: '[251]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁰ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁰ 7s²',
    discoverer: 'Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso & Glenn T. Seaborg (LBNL Berkeley)', year: 1950,
    notes: 'Tổng hợp tại LBNL Berkeley bằng cách bắn phá curium-242 bằng hạt alpha năng lượng cao.'
  },
  {
    z: 99, symbol: 'Es', nameVi: 'Einstein', nameEn: 'Einsteinium', atomicMass: '[252]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹¹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹¹ 7s²',
    discoverer: 'Albert Ghiorso et al. (LBNL Berkeley)', year: 1952,
    notes: 'Phát hiện trong bụi phóng xạ của vụ thử bom nhiệt hạch đầu tiên "Ivy Mike" tại đảo san hô Enewetak.'
  },
  {
    z: 100, symbol: 'Fm', nameVi: 'Fecmi', nameEn: 'Fermium', atomicMass: '[257]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹² 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹² 7s²',
    discoverer: 'Albert Ghiorso et al. (LBNL Berkeley)', year: 1953,
    notes: 'Cũng được cô lập từ mẫu tro phóng xạ của vụ nổ bom hydro Ivy Mike; đặt tên theo Enrico Fermi.'
  },
  {
    z: 101, symbol: 'Md', nameVi: 'Menđelevi', nameEn: 'Mendelevium', atomicMass: '[258]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹³ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹³ 7s²',
    discoverer: 'Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson & Glenn T. Seaborg (LBNL Berkeley)', year: 1955,
    notes: 'Nguyên tố đầu tiên được tạo ra từng nguyên tử một (bắn hạt alpha vào einsteinium-253).'
  },
  {
    z: 102, symbol: 'No', nameVi: 'Nobeli', nameEn: 'Nobelium', atomicMass: '[259]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s²',
    discoverer: 'JINR Dubna và LBNL Berkeley', year: 1966,
    notes: 'Việc ghi công có tranh cãi giữa Viện Nobel (Thụy Điển), JINR Dubna (Liên Xô) và Berkeley; IUPAC công nhận nhóm Dubna (1966) (có tranh cãi).'
  },
  {
    z: 103, symbol: 'Lr', nameVi: 'Lawrenci', nameEn: 'Lawrencium', atomicMass: '[266]', group: 'f-block', period: 7,
    category: 'họ Actini', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 7s² 7p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s² 7p¹',
    discoverer: 'Albert Ghiorso et al. (LBNL Berkeley) & JINR Dubna', year: 1961,
    notes: 'Cấu hình thực nghiệm 2015 chỉ ra hiệu ứng tương đối tính làm electron hóa trị điền vào 7p¹ thay vì 6d¹. Tổng hợp đầu tiên tại Berkeley.'
  },

  // Tiếp tục chu kỳ 7 (nhóm 4-18)
  {
    z: 104, symbol: 'Rf', nameVi: 'Rutherforđi', nameEn: 'Rutherfordium', atomicMass: '[267]', group: 4, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d² 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d² 7s²',
    isPredicted: true,
    discoverer: 'JINR Dubna và LBNL Berkeley', year: 1969,
    notes: 'Cấu hình (dự đoán). Tranh chấp quyền phát hiện giữa JINR Dubna (1964) và LBNL Berkeley (1969) (có tranh cãi).'
  },
  {
    z: 105, symbol: 'Db', nameVi: 'Đubni', nameEn: 'Dubnium', atomicMass: '[268]', group: 5, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d³ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d³ 7s²',
    isPredicted: true,
    discoverer: 'JINR Dubna và LBNL Berkeley', year: 1970,
    notes: 'Cấu hình (dự đoán). Tranh cãi tên gọi giữa "hahnium" (Mỹ) và "nielsbohrium" (Liên Xô); IUPAC chốt tên theo Dubna năm 1997 (có tranh cãi).'
  },
  {
    z: 106, symbol: 'Sg', nameVi: 'Seaborgi', nameEn: 'Seaborgium', atomicMass: '[269]', group: 6, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁴ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁴ 7s²',
    isPredicted: true,
    discoverer: 'LBNL Berkeley và JINR Dubna', year: 1974,
    notes: 'Cấu hình (dự đoán). Albert Ghiorso và cộng sự tại Berkeley tổng hợp bằng máy gia tốc HILAC năm 1974.'
  },
  {
    z: 107, symbol: 'Bh', nameVi: 'Bohri', nameEn: 'Bohrium', atomicMass: '[270]', group: 7, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁵ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁵ 7s²',
    isPredicted: true,
    discoverer: 'GSI Darmstadt (Đức) & JINR Dubna', year: 1981,
    notes: 'Cấu hình (dự đoán). Peter Armbruster và Gottfried Münzenberg tại GSI Darmstadt tổng hợp thành công năm 1981.'
  },
  {
    z: 108, symbol: 'Hs', nameVi: 'Hassi', nameEn: 'Hassium', atomicMass: '[270]', group: 8, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁶ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁶ 7s²',
    isPredicted: true,
    discoverer: 'Peter Armbruster, Gottfried Münzenberg et al. (GSI Darmstadt)', year: 1984,
    notes: 'Cấu hình (dự đoán). Tổng hợp tại Trung tâm Nghiên cứu Ion Nặng GSI Darmstadt; đặt tên theo bang Hesse.'
  },
  {
    z: 109, symbol: 'Mt', nameVi: 'Meitneri', nameEn: 'Meitnerium', atomicMass: '[278]', group: 9, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁷ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁷ 7s²',
    isPredicted: true,
    discoverer: 'Gottfried Münzenberg, Peter Armbruster et al. (GSI Darmstadt)', year: 1982,
    notes: 'Cấu hình (dự đoán). Đặt tên vinh danh nhà vật lý hạt nhân người Áo Lise Meitner.'
  },
  {
    z: 110, symbol: 'Ds', nameVi: 'Đarmstati', nameEn: 'Darmstadtium', atomicMass: '[281]', group: 10, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁸ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁸ 7s²',
    isPredicted: true,
    discoverer: 'Sigurd Hofmann et al. (GSI Darmstadt)', year: 1994,
    notes: 'Cấu hình (dự đoán). Tổng hợp bằng cách bắn chùm ion niken-62 vào chì-208 tại GSI Darmstadt.'
  },
  {
    z: 111, symbol: 'Rg', nameVi: 'Rơngen', nameEn: 'Roentgenium', atomicMass: '[282]', group: 11, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d⁹ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁹ 7s²',
    isPredicted: true,
    discoverer: 'Sigurd Hofmann et al. (GSI Darmstadt)', year: 1994,
    notes: 'Cấu hình (dự đoán). Đặt tên vinh danh Wilhelm Conrad Röntgen, người phát hiện ra tia X.'
  },
  {
    z: 112, symbol: 'Cn', nameVi: 'Copernixi', nameEn: 'Copernicium', atomicMass: '[285]', group: 12, period: 7,
    category: 'kim loại chuyển tiếp', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s²',
    isPredicted: true,
    discoverer: 'Sigurd Hofmann et al. (GSI Darmstadt)', year: 1996,
    notes: 'Cấu hình (dự đoán). Bắn ion kẽm-70 vào bia chì-208 tại GSI Darmstadt; đặt tên theo Nicolaus Copernicus.'
  },
  {
    z: 113, symbol: 'Nh', nameVi: 'Nihoni', nameEn: 'Nihonium', atomicMass: '[286]', group: 13, period: 7,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p¹',
    isPredicted: true,
    discoverer: 'Kosuke Morita et al. (RIKEN, Nhật Bản)', year: 2004,
    notes: 'Cấu hình (dự đoán). Nguyên tố đầu tiên được phát hiện tại châu Á (Viện RIKEN, Nhật Bản).'
  },
  {
    z: 114, symbol: 'Fl', nameVi: 'Flerovi', nameEn: 'Flerovium', atomicMass: '[289]', group: 14, period: 7,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p²',
    isPredicted: true,
    discoverer: 'JINR Dubna và LLNL', year: 1998,
    notes: 'Cấu hình (dự đoán). Hợp tác giữa Viện Dubna (Nga) và LLNL (Mỹ); đặt tên theo Phòng thí nghiệm Phản ứng Hạt nhân Flerov.'
  },
  {
    z: 115, symbol: 'Mc', nameVi: 'Moxcovi', nameEn: 'Moscovium', atomicMass: '[290]', group: 15, period: 7,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p³',
    isPredicted: true,
    discoverer: 'JINR Dubna, LLNL và ORNL', year: 2003,
    notes: 'Cấu hình (dự đoán). Tổng hợp bằng cách bắn ion canxi-48 vào americium-243; đặt tên theo tỉnh Moscow.'
  },
  {
    z: 116, symbol: 'Lv', nameVi: 'Livermori', nameEn: 'Livermorium', atomicMass: '[293]', group: 16, period: 7,
    category: 'kim loại yếu', generalType: 'Kim loại',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
    isPredicted: true,
    discoverer: 'JINR Dubna và LLNL', year: 2000,
    notes: 'Cấu hình (dự đoán). Hợp tác giữa Dubna cùng Phòng thí nghiệm Quốc gia Lawrence Livermore (LLNL).'
  },
  {
    z: 117, symbol: 'Ts', nameVi: 'Tennessin', nameEn: 'Tennessine', atomicMass: '[294]', group: 17, period: 7,
    category: 'halogen', generalType: 'Phi kim',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
    isPredicted: true,
    discoverer: 'JINR Dubna, LLNL và ORNL', year: 2010,
    notes: 'Cấu hình (dự đoán). Hợp tác giữa Dubna, Lawrence Livermore và Oak Ridge; đặt tên theo bang Tennessee.'
  },
  {
    z: 118, symbol: 'Og', nameVi: 'Oganeson', nameEn: 'Oganesson', atomicMass: '[294]', group: 18, period: 7,
    category: 'khí hiếm', generalType: 'Khí hiếm',
    configCondensed: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', configFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    isPredicted: true,
    discoverer: 'JINR Dubna và LLNL', year: 2002,
    notes: 'Cấu hình (dự đoán). Đặt tên vinh danh viện sĩ Yuri Oganessian; nguyên tố nặng nhất hiện tại trong bảng tuần hoàn.'
  }
];

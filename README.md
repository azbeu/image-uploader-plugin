# Category Image Uploader — Figma Plugin

Figma'dan to'g'ridan-to'g'ri uzxarid.felixits.uz platformasiga kategoriya rasmlarini yuklash uchun plugin.

---

## O'rnatish

1. Figma'ni oching
2. Menyu → Plugins → Development → Import plugin from manifest...
3. `manifest.json` faylini tanlang
4. Plugin tayyor

---

## Ishlatish tartibi

### 1. Token kiriting

Plugin ochilganda "Authorization Token" maydoniga Bearer tokenni kiriting:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Token kiritilishi bilan kategoriyalar avtomatik yuklanadi. Token har safar plugin qayta ochilganda kiritilishi kerak — u saqlanmaydi.

---

### 2. Rasm tanlang

Figma'da rasmga aylantirmoqchi bo'lgan frame yoki komponentni tanlang. Plugin tanlangan elementni avtomatik aniqlaydi va PNG formatida eksport qiladi.

Eksport muvaffaqiyatli bo'lsa, chap tomonda rasm ko'rinadi va "Tayyor" belgisi chiqadi.

---

### 3. Kategoriya tanlang

**Kategoriya turi** — Product, Service, Auto yoki Home bo'yicha filterlash mumkin. Kerak bo'lmasa "Barchasi" qoldiriladi.

**Kategoriya qidirish** — qidiruv maydoniga kategoriya nomini yozing. Ro'yxatdan kerakli kategoriyani bosing.

Agar tanlangan kategoriyaning ichki (child) kategoriyalari mavjud bo'lsa, ular ham qo'shimcha ro'yxat sifatida chiqadi. Aniq ichki kategoriyani tanlash tavsiya etiladi.

Tanlangan kategoriya yo'li ekranda quyidagi ko'rinishda aks etadi:

```
Elektronika  ›  Telefonlar
```

---

### 4. Yuborish

Rasm va kategoriya tayyor bo'lgandan keyin "Yuborish" tugmasi faollashadi. Tugmani bosing — rasm serverga yuklanadi.

Jarayon davomida progress ko'rsatkichi ko'rinadi. Muvaffaqiyatli bo'lsa pastda yashil xabar chiqadi.

---

## Xatoliklar

Plugin pastki qismida "Error Log" bo'limi joylashgan. U yerda barcha API xatoliklari ko'rsatiladi:

- HTTP status kodi (400, 401, 404, 500 va h.k.)
- So'rov yuborilgan URL
- Server qaytargan xabar

"Tozalash" tugmasi bilan log tozalanadi.

---

## Texnik talablar

- Figma Desktop yoki Figma Web
- Internet ulanish
- Amal qiluvchi Bearer token

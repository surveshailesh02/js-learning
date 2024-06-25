 function Bank (bankName,location,ifscCode,branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
 }
 console.log(`===============  Step 1 & Step 2    ====================`);
 const yesBank = new Bank ("yes Bank", "Hydrabad", "YESB0000926", "000926");
 console.log(`Bank Details is : Bank Name : ${yesBank.bankName}, Bank Location : ${yesBank.location}, Bank IFSC Code : ${yesBank.ifscCode},  Bank Brach Code : ${yesBank.branchCode}`);
 console.log(`===================================`);

 const SBIBank = new Bank ("SBI Bank", "Wakad", "SBIN0017292", "017292");
 console.log(`Bank Details is : Bank Name : ${SBIBank.bankName}, Bank Location : ${SBIBank.location}, Bank IFSC Code : ${SBIBank.ifscCode},  Bank Brach Code : ${SBIBank.branchCode}`);
 console.log(`===================================`);

 const MaharastraBank = new Bank ("Maharastra Bank", "Koperkhairne", "MAHB0000402", "000402");
 console.log(`Bank Details is : Bank Name : ${MaharastraBank.bankName}, Bank Location : ${MaharastraBank.location}, Bank IFSC Code : ${MaharastraBank.ifscCode},  Bank Brach Code : ${MaharastraBank.branchCode}`);
 console.log(`===================================`);

 const AxisBank = new Bank ("Axis Bank", "Ravet", "UTIB0005221", "005221");
 console.log(`Bank Details is : Bank Name : ${AxisBank.bankName}, Bank Location : ${AxisBank.location}, Bank IFSC Code : ${AxisBank.ifscCode},  Bank Brach Code : ${AxisBank.branchCode}`);
 console.log(`===================================`);


 console.log(`===============  Step 3    ====================`);
 Bank.prototype.openTime = "9 AM IST";
 console.log(`Bank Opening Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);


 console.log(`===============  Step 4    ====================`);
 Bank.prototype.closeTime = "6 PM IST";
 console.log(`Bank Closing Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);


 console.log(`===============  Step 5    ====================`);
 Bank.prototype.openTime = "9 AM IST";
 console.log(`SBI Bank Opening Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);


 Bank.prototype.closeTime = "6 PM IST";
 console.log(`SBI Bank Closing Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);


 console.log(`===============  Step 6  ====================`);
 Bank.prototype.openTime = "9 AM IST";
 console.log(`Axis Bank Opening Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);

 
 Bank.prototype.closeTime = "6 PM IST";
 console.log(`Axis Bank Closing Time is : ${Bank.prototype.openTime}`);
 console.log(`===================================`);

 
 console.log(`===============  Step 7    ====================`);
 console.log(`Bank Details is : Bank Name : ${yesBank.bankName}, Bank Brach Code : ${yesBank.branchCode}, Bank Opening Time : ${Bank.prototype.openTime}`);
 console.log(`===================================`);

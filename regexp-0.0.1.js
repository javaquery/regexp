/* 
 * regexp : 
 *  - the javascript library
 * copyrights: 
 *  - www.javaquery.com
 * licenses:
 *  - General Public License
 * Special Thanks to 
 *  - http://www.regular-expressions.info/
 *  - http://www.mkyong.com/
 *  
 *  This javascript designed to help regular expression based validation of your input(s).
 *  This is first launch of v0.0.1 and still under testing.
 *  
 *  vkijust4u@javaquery.com:
 *  - Report bug
 *  - Share your regular expression and help other. Your name will be published under author
 *  
 *  Author:
 *  - Vicky Thakor (vkijust4u@javaquery.com)
 */
var regularExpression_email = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
/* It'll match words like #javaQuery */
var regularExpression_hashtag = /#(\w*[a-zA-Z_]+\w*)/gim;
/* It'll match words like **bold** */
var regularExpression_bold = /\*\*(.*?)\*\*/gim;
/* It'll match words like *italic* */
var regularExpression_italic = /\*(.*?)\*/gim;
/* It'll match words like --strike-- */
var regularExpression_strike = /\--(.*?)\--/gim;
/* It'll match phone like ###-###-#### */
var regularExpression_phone_3_3_4 = /\d{3}-\d{3}-\d{4}/;
/* It'll match phone like ###-####### */
var regularExpression_phone_3_7 = /\d{3}-\d{7}/;
/* It'll match phone like ########## */
var regularExpression_phone_10 = /\d{10}/;
/* It'll match phone like #####-###### */
var regularExpression_phone_5_6 = /\d{5}-\d{6}/;
/* It'll match ip Address 127.0.0.1 */
var regularExpression_ipAddress = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g;
/* It'll match date YYYY-MM-DD or YYYY/MM/DD */
var regularExpression_yyyy_mm_dd = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
/* It'll match date MM-DD-YYYY or MM/DD/YYYY*/
var regularExpression_mm_dd_yyyy = /^(0[1-9]|1[012])([- /.])(0[1-9]|[12][0-9]|3[01])\2(19|20)\d\d$/;
/* It'll match date DD-MM-YYYY or DD/MM/YYYY*/
var regularExpression_dd_mm_yyyy = /^(0[1-9]|[12][0-9]|3[01])([- /.])(0[1-9]|1[012])\2(19|20)\d\d$/;
/* It'll match n number of digit only */
var regularExpression_digit = /^[0-9]*$/;
/* It'll match floating number */
var regularExpression_float = /^[+-]?[0-9]*[\.][0-9]*[eE]?[+-]?[0-9]*/;
/*^                  # Start of the line
  [a-z0-9_-\.]	     # Match characters and symbols in the list, a-z, 0-9 , underscore , hyphen, dot
             {3,15}  # Length at least 3 characters and maximum length of 15 
$                    # End of the line */
var regularExpression_username = /^[a-z0-9_-\.]{3,15}$/;
/*(			# Start of group
  (?=.*\d)		#   must contains one digit from 0-9
  (?=.*[a-z])		#   must contains one lowercase characters
  (?=.*[A-Z])		#   must contains one uppercase characters
  (?=.*[@#$%])		#   must contains one special symbols in the list "@#$%"
              .		#     match anything with previous condition checking
                {8,20}	#        length at least 8 characters and maximum of 20	
)			# End of group */
var regularExpression_password = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})/;
/*^		 #start of the line
 #		 #  must constains a "#" symbols
 (		 #  start of group #1
  [A-Fa-f0-9]{6} #    any strings in the list, with length of 6
  |		 #    ..or
  [A-Fa-f0-9]{3} #    any strings in the list, with length of 3
 )		 #  end of group #1 
$		 #end of the line*/
var regularExpression_HEXcolor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
/* It'll match image file extension*/
var regularExpression_imageFile = /[^\s]+[\.](jpg|jfif|jpeg|tiff|raw|pam|webp|svg|pns|mpo|jps|png|gif|bmp)$/;
/* It'll match document file format*/
var regularExpression_documentFile = /[^\s]+[\.](doc|docx|xls|xlsx|ppt|pptx|odf|odt|ods|odp|odg|pdf)$/;
/* It'll match HTML tags like <a> and/or </a>*/
var regularExpression_HTMLtag = /<("[^"]*"|'[^']*'|[^'">])*>/;
/* It'll match time like 12:00am not 13:59am */
var regularExpression_12Hour = /(1[012]|^[0-9]{1}):([0-5]{1}[0-9]{1})(am|pm)$/;
/* It'll match time like 23:11 */
var regularExpression_24Hour = /([01][0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}/;
/* It'll match MAC Address ##-##-##-##-##-##*/
var regularExpression_MAC = /^[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}$/;
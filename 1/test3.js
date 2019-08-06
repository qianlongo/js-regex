const utils = require('../utils')
// 惰性匹配
utils.console('good idea, nice try', /good|nice/g, 'match')
utils.console('goodbye', /goodbye|bye/, 'match')

// 1.5 案例分析
// 1 匹配16进制颜色值

/**
 * #ffbbad 
 * #Fc01DF
 * #FFF
 * #ffE
 */

 utils.console('#ffbbad#Fc01DF#FFF#ffE', /#\w{6}|#\w{3}/g, 'match')

 // 2 匹配时间
 /**
 * 23:59 
 * 02:07
 * 07:07
 */
utils.console('23:50', /^([01][0-9]|2[1-3]):[0-5][0-9]$/)
utils.console('7:7', /^(0?[0-9]|1[0-9]|2[0-3])|(0?[0-9]|[1-5][0-9])$/)

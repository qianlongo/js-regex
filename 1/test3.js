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
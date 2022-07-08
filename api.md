账户相关：
post /account/register
{name,password,avatar,email}

{
  id: 'owijefoiwjefoijweoifowfejio',
  name: 'damiao',
  avatar: 'url',
  phone: 'xoiwjfe'
}

post /account/login
{name,password}

获取当前登陆用户
get /account/current-user

get /account/logout


GET /vote
返回当前登陆用户创建的所有投票





POST /vote
{
  title: string
  desc: string
  deadline: timestring
  anonymous: true/false
  multiple: true/false
  options: ['苹果', '樱桃',]
}
用当前登陆身份创建投票




GET /vote/:voteId
获取某个投票的信息
返回：
{
  code: 0,
  result: {
    vote 投票信息
    options 选项信息
    userVotes 已投票数信息
  }
}



DELETE /vote/:voteId
删除当前用户创建的投票
返回：
{
  code: -1,
  msg: 'xxx',
}


实名投票与匿名投票交互是不一样的：

实名投票点一下就投了
匿名投票是选好了一下投，并且投好不能改了

POST /vote/51
向该问题的选项投票
问题过期则不能投票
请求体：
{
  optionIds: [5, 8, 9] // 选项的id
}
单选：
匿名不可修改
实名可切换

多选：
实名实时切换
匿名不可修改





实时投票状态接口
ws /realtime-voteinfo/:id
连接此websocket接口，可以实时收到此投票的更新信息
只在投票还未截止时可用，截止后连接会断开

#### 1. 为啥要用Git？

> 1. 在单人开发过程中需要进行版本管理
>
> 2. 在多人开发过程中不仅需要版本管理还需要多人协同控制

#### 2. 介绍 

> 1. Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或大或小的项目。
>
> 2. Git的官网：https://git-scm.com/

#### 3.架构

> 1. 工作区：本地的项目目录。
>
> 2. 版本库：工作区中有一个隐藏的目录.` .git`，这个目录不属于工作区，而是git的`版本库`，是git管理的所有内容。
>
> 3. 暂存区：版本库中临时的存放区域，保存下一步要提交的文件。
>
> 4. 分支：版本库中包含若干分支，提交的文件存储在分支。
>
>    <center><b>架构图</b></center>
>
>    ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108150321634.png)
>
>    

#### 4.仓库

>1. 就是版本库加工作区

#### 5.本地仓库的基本命令

>1. 创建仓库`git init`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108150902817.png)
>
>2. 查看仓库的状态`git status`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108151429018.png)
>
>3. 将文件从工作区保存在暂存区中`git add filename `![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108151833754.png)
>
> 4. 提交文件形成正式版本`git commit -m "这里写提交的描述信息"`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108152232204.png)
>

#### 6.远程仓库

>1. 当多人开发时需要共享代码、合并代码，此时需要一个`远程仓库`。
>
>2. 远程仓库的工作模式
>
>   <center><b>远程仓库工作模式</b></center>
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108153422044.png)
>
>3. 远程仓库选型：github、码云、公司内部的远程仓库等。

### 7.远程仓库的基本命令

>1. 关联远程仓库`git remote add repositoryName url `![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108155203030.png)
>
> 2. 查看关联的地址`git remote -v`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108155404834.png)
>
>3. 将本地仓库提交到远程仓库`git push repositoryName branchesName `![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108160408101.png)
>
> 4. 将远程仓库克隆到本地仓库`git clone url`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108160847442.png)
>
>5. 拉取远程仓库内容到本地`git pull repositoryName branchesName ` 
>
> ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108161647764.png)

### 8.分支

>1. 分子的简介：分支是一个个版本最终存储的位置；分支就是一条时间线，每次`git commit`形成一个个版本，一个个版本依次存储在分支的一个个提交点上。
>
>   <center><b>分支由多个提交点组成，分支上会有一个指针，默认总是指向最新的提交点</b></center>
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114110334.png)
>
>2. 新分支初始化内容：每一个分支都有一个`指针`，新建一个分支，首先是新建一个`指针`；而且新分支的指针会和当前分支指向`同一提交点`；新分支包含的提交点就是从第一个提交点到分支指针指向的提交点。

### 9.分支的基本命令

>1. 查看分支`git branch`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114110950.png)
>
>2. 创建分支`git branch branchName`![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114111215.png)
>
>3. 切换分支`git checkout branchName `
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114111537.png)
>
>4. 查看分支日志:`git log --online`(简易日志)`git log`(完整日志)
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114112745.png)
>
>5. 分支的合并`git merge branchName `
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/20201114113430.png)


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

>1. 创建仓库`git init`
>
>![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108150902817.png)
>
>2. 查看仓库的状态`git status`
>
>   
>
>  ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108151429018.png)
>
>3. 将文件从工作区保存在暂存区中`git add filename `
>
>  ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108151833754.png)
>
>4. 提交文件形成正式版本`git commit -m "这里写提交的描述信息"`
>
>  ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108152232204.png)

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

>1. 关联远程仓库`git remote add repositoryName url `
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108155203030.png)
>
>2. 查看关联的地址`git remote -v`
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108155404834.png)
>
>3. 将本地仓库提交到远程仓库`git push repositoryName branchesName `
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108160408101.png)
>
>4. 将远程仓库克隆到本地仓库`git clone url`
>
>   ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108160847442.png)
>
>5. 拉取远程仓库内容到本地`git pull repositoryName branchesName ` 
>
> ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201108161647764.png)


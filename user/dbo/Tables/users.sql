CREATE TABLE [dbo].[users] (
    [u_Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name]   NVARCHAR (50) NOT NULL,
    [Email]  NVARCHAR (50) NOT NULL,
    [Age]    INT           NOT NULL,
    [Degree] NVARCHAR (50) NOT NULL,
    [Gender] VARCHAR (50)  NOT NULL,
    PRIMARY KEY CLUSTERED ([u_Id] ASC)
);


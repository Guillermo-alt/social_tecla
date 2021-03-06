USE [master]
GO
/****** Object:  Database [social_tecla]    Script Date: 30/08/2021 07:53:21 p. m. ******/
CREATE DATABASE [social_tecla]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'social_tecla', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\social_tecla.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'social_tecla_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\social_tecla_log.ldf' , SIZE = 139264KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [social_tecla] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [social_tecla].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [social_tecla] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [social_tecla] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [social_tecla] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [social_tecla] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [social_tecla] SET ARITHABORT OFF 
GO
ALTER DATABASE [social_tecla] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [social_tecla] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [social_tecla] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [social_tecla] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [social_tecla] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [social_tecla] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [social_tecla] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [social_tecla] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [social_tecla] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [social_tecla] SET  ENABLE_BROKER 
GO
ALTER DATABASE [social_tecla] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [social_tecla] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [social_tecla] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [social_tecla] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [social_tecla] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [social_tecla] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [social_tecla] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [social_tecla] SET RECOVERY FULL 
GO
ALTER DATABASE [social_tecla] SET  MULTI_USER 
GO
ALTER DATABASE [social_tecla] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [social_tecla] SET DB_CHAINING OFF 
GO
ALTER DATABASE [social_tecla] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [social_tecla] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [social_tecla] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [social_tecla] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'social_tecla', N'ON'
GO
ALTER DATABASE [social_tecla] SET QUERY_STORE = OFF
GO
USE [social_tecla]
GO
/****** Object:  Table [dbo].[friendships]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[friendships](
	[id_friendship] [int] IDENTITY(1,1) NOT NULL,
	[id_user_friend] [int] NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_friendship] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobbies]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobbies](
	[id_hobbie] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NOT NULL,
	[description] [nvarchar](50) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_hobbie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[languages]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[languages](
	[id_lenguage] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](30) NOT NULL,
	[level] [nvarchar](10) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_lenguage] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pictures]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pictures](
	[ic_picture] [int] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](40) NOT NULL,
	[image] [nvarchar](30) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ic_picture] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[skills]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[skills](
	[id_skill] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](30) NOT NULL,
	[score] [float] NOT NULL,
	[totalUserScore] [int] NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_skill] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[socialNetworks]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[socialNetworks](
	[id_newtwork] [int] IDENTITY(1,1) NOT NULL,
	[newtwork] [nvarchar](150) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_newtwork] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[studies]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[studies](
	[id_studies] [int] IDENTITY(1,1) NOT NULL,
	[institution] [nvarchar](150) NOT NULL,
	[period] [nvarchar](30) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[id_user] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_studies] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 30/08/2021 07:53:22 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id_user] [int] IDENTITY(1,1) NOT NULL,
	[userName] [nvarchar](30) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[names] [nvarchar](50) NOT NULL,
	[last_names] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[profile_photo] [nvarchar](50) NOT NULL,
	[cover_page] [nvarchar](50) NOT NULL,
	[date_of_birth] [nvarchar](50) NOT NULL,
	[About_me] [nvarchar](200) NOT NULL,
	[address] [nvarchar](100) NOT NULL,
	[phone] [nvarchar](20) NOT NULL,
	[active] [int] NOT NULL,
	[role] [nvarchar](10) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_user] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[friendships] ON 

INSERT [dbo].[friendships] ([id_friendship], [id_user_friend], [createdAt], [updatedAt], [id_user]) VALUES (2, 2, CAST(N'2021-08-31T00:20:44.2390000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:20:44.2390000+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[friendships] ([id_friendship], [id_user_friend], [createdAt], [updatedAt], [id_user]) VALUES (3, 3, CAST(N'2021-08-31T00:20:57.9580000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:20:57.9580000+00:00' AS DateTimeOffset), 1)
SET IDENTITY_INSERT [dbo].[friendships] OFF
GO
SET IDENTITY_INSERT [dbo].[hobbies] ON 

INSERT [dbo].[hobbies] ([id_hobbie], [name], [description], [createdAt], [updatedAt], [id_user]) VALUES (1, N'play guitar', N'play covers, rock an roll genre', CAST(N'2021-08-30T22:45:46.6290000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:45:46.6290000+00:00' AS DateTimeOffset), 1)
SET IDENTITY_INSERT [dbo].[hobbies] OFF
GO
SET IDENTITY_INSERT [dbo].[languages] ON 

INSERT [dbo].[languages] ([id_lenguage], [name], [level], [createdAt], [updatedAt], [id_user]) VALUES (1, N'Ingles', N'B2', CAST(N'2021-08-30T22:45:03.7390000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:45:03.7390000+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[languages] ([id_lenguage], [name], [level], [createdAt], [updatedAt], [id_user]) VALUES (2, N'Japonés', N'1', CAST(N'2021-08-30T22:45:39.8150000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:45:39.8150000+00:00' AS DateTimeOffset), 1)
SET IDENTITY_INSERT [dbo].[languages] OFF
GO
SET IDENTITY_INSERT [dbo].[skills] ON 

INSERT [dbo].[skills] ([id_skill], [name], [score], [totalUserScore], [createdAt], [updatedAt], [id_user]) VALUES (1, N'SQL Server', 10, 0, CAST(N'2021-08-30T22:44:25.9580000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:44:25.9580000+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[skills] ([id_skill], [name], [score], [totalUserScore], [createdAt], [updatedAt], [id_user]) VALUES (2, N'Java script', 60, 1, CAST(N'2021-08-30T22:52:02.2570000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:52:41.0090000+00:00' AS DateTimeOffset), 2)
INSERT [dbo].[skills] ([id_skill], [name], [score], [totalUserScore], [createdAt], [updatedAt], [id_user]) VALUES (3, N'CSS', 90, 1, CAST(N'2021-08-30T22:57:32.0970000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:19:56.0620000+00:00' AS DateTimeOffset), 3)
INSERT [dbo].[skills] ([id_skill], [name], [score], [totalUserScore], [createdAt], [updatedAt], [id_user]) VALUES (4, N'', 10, 0, CAST(N'2021-08-31T00:19:32.9670000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:19:32.9670000+00:00' AS DateTimeOffset), 3)
INSERT [dbo].[skills] ([id_skill], [name], [score], [totalUserScore], [createdAt], [updatedAt], [id_user]) VALUES (5, N'java', 10, 0, CAST(N'2021-08-31T00:19:40.2370000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:19:40.2370000+00:00' AS DateTimeOffset), 3)
SET IDENTITY_INSERT [dbo].[skills] OFF
GO
SET IDENTITY_INSERT [dbo].[socialNetworks] ON 

INSERT [dbo].[socialNetworks] ([id_newtwork], [newtwork], [createdAt], [updatedAt], [id_user]) VALUES (1, N'https://www.linkedin.com/in/guillermo-ortega-vargas-76b9ba20a/', CAST(N'2021-08-30T22:43:23.2680000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:43:23.2680000+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[socialNetworks] ([id_newtwork], [newtwork], [createdAt], [updatedAt], [id_user]) VALUES (2, N'https://www.linkedin.com/in/guillermo-ortega-vargas-76b9ba20a/', CAST(N'2021-08-31T00:20:12.3590000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:20:12.3590000+00:00' AS DateTimeOffset), 1)
SET IDENTITY_INSERT [dbo].[socialNetworks] OFF
GO
SET IDENTITY_INSERT [dbo].[studies] ON 

INSERT [dbo].[studies] ([id_studies], [institution], [period], [createdAt], [updatedAt], [id_user]) VALUES (1, N'2017-2021', N'UAM Cuajimalpa', CAST(N'2021-08-30T22:44:43.5670000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:44:43.5670000+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[studies] ([id_studies], [institution], [period], [createdAt], [updatedAt], [id_user]) VALUES (2, N'UNAM', N'2001-2005', CAST(N'2021-08-31T00:21:43.6550000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:21:43.6550000+00:00' AS DateTimeOffset), 3)
SET IDENTITY_INSERT [dbo].[studies] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id_user], [userName], [email], [names], [last_names], [password], [profile_photo], [cover_page], [date_of_birth], [About_me], [address], [phone], [active], [role], [createdAt], [updatedAt]) VALUES (1, N'Guiller-alt', N'guille76@hotmail.com', N'Guillermo', N'Ortega Vargas', N'pass2', N'profiles/asd.png', N'profiles/tecla.png', N'1994-05-28', N'information technology undergraduate student', N'Fresnos 2 Las cruces 10330 cdmx', N'5558103056', 1, N'user', CAST(N'2021-08-30T22:40:16.5710000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:18:30.5570000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id_user], [userName], [email], [names], [last_names], [password], [profile_photo], [cover_page], [date_of_birth], [About_me], [address], [phone], [active], [role], [createdAt], [updatedAt]) VALUES (2, N'Albert', N'alber@hotmail.com', N'Alberto', N'Ortega Vargas', N'pass', N'default/defaulProfile.png', N'default/defaultCover.png', N'1996-12-16', N'Photography student', N'10 de mayo 9 Las cruces 10330 cdmx', N'5587895475', 1, N'user', CAST(N'2021-08-30T22:50:01.9060000+00:00' AS DateTimeOffset), CAST(N'2021-08-30T22:50:01.9060000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id_user], [userName], [email], [names], [last_names], [password], [profile_photo], [cover_page], [date_of_birth], [About_me], [address], [phone], [active], [role], [createdAt], [updatedAt]) VALUES (3, N'Kina', N'kina648@hotmail.com', N'Ana Cristina', N'Maturino Vargas', N'pass', N'profiles/hola.jpg', N'profiles/tecla.png', N'1992-06-17', N'Informatics student', N'Margarita 16 Las cruces 10303 cdmx', N'5578456987', 1, N'user', CAST(N'2021-08-30T22:57:07.3470000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:21:20.9860000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id_user], [userName], [email], [names], [last_names], [password], [profile_photo], [cover_page], [date_of_birth], [About_me], [address], [phone], [active], [role], [createdAt], [updatedAt]) VALUES (4, N'Lalo-lol', N'lalo4685@hotmail', N'Eduardo ', N'Maturino Vargas', N'pass', N'default/defaulProfile.png', N'default/defaultCover.png', N'2001-06-05', N'Engineering student', N'asdas qwe', N'5587986365', 1, N'user', CAST(N'2021-08-31T00:13:34.2420000+00:00' AS DateTimeOffset), CAST(N'2021-08-31T00:13:34.2420000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[users] OFF
GO
ALTER TABLE [dbo].[friendships]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[hobbies]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[languages]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[pictures]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[skills]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[socialNetworks]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[studies]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([id_user])
ON DELETE CASCADE
GO
USE [master]
GO
ALTER DATABASE [social_tecla] SET  READ_WRITE 
GO

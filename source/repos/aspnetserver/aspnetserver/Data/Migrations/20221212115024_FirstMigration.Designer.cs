﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using aspnetserver.Data;

#nullable disable

namespace aspnetserver.Data.Migrations
{
    [DbContext(typeof(AppDBContext))]
    [Migration("20221212115024_FirstMigration")]
    partial class FirstMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("aspnetserver.Data.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(10000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.HasKey("PostId");

                    b.ToTable("Posts");

                    b.HasData(
                        new
                        {
                            PostId = 1,
                            Content = "This is post 1 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 1"
                        },
                        new
                        {
                            PostId = 2,
                            Content = "This is post 2 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 2"
                        },
                        new
                        {
                            PostId = 3,
                            Content = "This is post 3 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 3"
                        },
                        new
                        {
                            PostId = 4,
                            Content = "This is post 4 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 4"
                        },
                        new
                        {
                            PostId = 5,
                            Content = "This is post 5 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 5"
                        },
                        new
                        {
                            PostId = 6,
                            Content = "This is post 6 and it has some very interesting content. I have also liked the video and subscribed.",
                            Title = "Post 6"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

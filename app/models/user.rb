class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :songs

  validates :email, presence: true, allow_blank: false
  validates :encrypted_password, presence: true, allow_blank: false
end

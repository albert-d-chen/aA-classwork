require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    subject(:user) do 
        User.create!(
            username: 'barney',
            password: 'password'
        )
    end

    describe 'GET #index' do 
        it 'renders the user at whatever index' do 
            get :index 
            users = controller.instance_variable_get(:@users)
            expect(users).to eq(User.all)
            expect(response). to render_template('index')
        end 
    end

    describe 'GET #show' do 
        it 'renders specific user' do 
            get :show, params: {id: user.id}  
            user = controller.instance_variable_get(:@user)
            expect(user).to eq(User.find(user.id))
            expect(response).to render_template('show')
        end 
    end

    describe 'POST #create' do 
        context 'valid username and password' do 
            it 'redirects user to show page' do 
                post :create, params:{user: {username: 'tomato', password: 'redred'}}
                new_user = controller.instance_variable_get(:@user)
                expect(response).to redirect_to(user_url(new_user.id))
            end
        end

        context 'invalid username and password' do 
            it 're-renders the new page' do 
                post :create, params:{user: {username: 'barneys1', password: '1'}}
                expect(response).to render_template('new')
                expect(flash[:errors]).to eq(['Password is too short (minimum is 6 characters)'])
            end 
        end
    end
end
